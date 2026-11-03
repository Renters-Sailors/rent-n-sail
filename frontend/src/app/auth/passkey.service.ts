import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SessionUser } from './session-user';

/** The picked passkey isn't known to the server, e.g. after its account was removed. */
export class UnregisteredPasskeyError extends Error {
  constructor() {
    super("This passkey isn't registered here. Enter a username to create an account.");
  }
}

declare global {
  interface CredentialRequestOptions {
    /** Chrome 149+ immediate UI mode; not in TypeScript's DOM types yet. */
    uiMode?: 'immediate';
  }
}

/**
 * How the browser offers passkeys: in the username field's autofill, in its usual dialog, or
 * (`immediate`) in its dialog only if this device has one, failing with `NotAllowedError`
 * and no UI otherwise. `immediate` needs a click and `supportsImmediate()`.
 */
export type PasskeyPrompt = 'autofill' | 'dialog' | 'immediate';

const promptOptions: Readonly<Record<PasskeyPrompt, CredentialRequestOptions>> = {
  autofill: { mediation: 'conditional' },
  dialog: {},
  immediate: { uiMode: 'immediate' },
};

/** Passkey ceremonies against the backend; each one ends with a session cookie. */
@Service()
export class PasskeyService {
  private readonly http = inject(HttpClient);

  /**
   * Signs in with an existing passkey. Resolves null when none was picked.
   * Rejects with `UnregisteredPasskeyError` when the server doesn't know the passkey.
   */
  async signIn(prompt: PasskeyPrompt, signal?: AbortSignal): Promise<SessionUser | null> {
    const options = await firstValueFrom(
      this.http.get<PublicKeyCredentialRequestOptionsJSON>('login/passkey/begin'),
    );
    const credential = await navigator.credentials.get({
      ...promptOptions[prompt],
      signal,
      publicKey: PublicKeyCredential.parseRequestOptionsFromJSON(options),
    });
    if (!(credential instanceof PublicKeyCredential)) return null;
    try {
      return await firstValueFrom(
        this.http.post<SessionUser>('login/passkey/complete', { assertion: credential.toJSON() }),
      );
    } catch (error) {
      if (!(error instanceof HttpErrorResponse && error.status === 404)) throw error;
      // Lets the browser drop the stale passkey, so autofill stops offering it.
      await PublicKeyCredential.signalUnknownCredential?.({
        rpId: options.rpId ?? location.hostname,
        credentialId: credential.id,
      }).catch(() => undefined);
      throw new UnregisteredPasskeyError();
    }
  }

  /** Whether the browser supports the `immediate` prompt. */
  async supportsImmediate(): Promise<boolean> {
    const capabilities = await PublicKeyCredential.getClientCapabilities?.();
    return capabilities?.['immediateGet'] === true;
  }

  /** Creates an account and its first passkey. */
  async register(username: string): Promise<SessionUser> {
    const options = await firstValueFrom(
      this.http.post<PublicKeyCredentialCreationOptionsJSON>('register/passkey/begin', {
        username,
      }),
    );
    const credential = await navigator.credentials.create({
      publicKey: PublicKeyCredential.parseCreationOptionsFromJSON(options),
    });
    if (!(credential instanceof PublicKeyCredential)) {
      throw new Error('Passkey creation was cancelled.');
    }
    return firstValueFrom(
      this.http.post<SessionUser>('register/passkey/complete', {
        attestation: credential.toJSON(),
      }),
    );
  }
}
