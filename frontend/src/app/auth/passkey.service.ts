import { HttpErrorResponse } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ApiService } from '../api/api.service';
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

/**
 * Passkey ceremonies against the backend; each one ends with a session cookie. Options are
 * fetched first, separately, so a click can start the browser prompt before any await:
 * Safari refuses a prompt that doesn't follow the click closely enough, without showing it.
 */
@Service()
export class PasskeyService {
  private readonly api = inject(ApiService);

  /** Options for signing in with any passkey of this site. */
  async signInOptions(): Promise<PublicKeyCredentialRequestOptions> {
    const options =
      await this.api.get<PublicKeyCredentialRequestOptionsJSON>('login/passkey/begin');
    return PublicKeyCredential.parseRequestOptionsFromJSON(options);
  }

  /**
   * Signs in with an existing passkey; the browser prompt starts before this returns.
   * Resolves null when none was picked. Rejects with `UnregisteredPasskeyError` when the
   * server doesn't know the passkey.
   */
  async signIn(
    prompt: PasskeyPrompt,
    publicKey: PublicKeyCredentialRequestOptions,
    signal?: AbortSignal,
  ): Promise<SessionUser | null> {
    // First, before any await, so it still counts as part of the click.
    const credential = await navigator.credentials.get({
      ...promptOptions[prompt],
      signal,
      publicKey,
    });
    if (!(credential instanceof PublicKeyCredential)) return null;
    try {
      return await this.api.post<SessionUser>('login/passkey/complete', {
        assertion: credential.toJSON(),
      });
    } catch (error) {
      if (!(error instanceof HttpErrorResponse && error.status === 404)) throw error;
      // Lets the browser drop the stale passkey, so autofill stops offering it.
      await PublicKeyCredential.signalUnknownCredential?.({
        rpId: publicKey.rpId ?? location.hostname,
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

  /** Options for a new account; the server only creates it once its passkey is verified. */
  async registrationOptions(username: string): Promise<PublicKeyCredentialCreationOptions> {
    const options = await this.api.post<PublicKeyCredentialCreationOptionsJSON>(
      'register/passkey/begin',
      { username },
    );
    return PublicKeyCredential.parseCreationOptionsFromJSON(options);
  }

  /** Creates the account and its first passkey; the browser prompt starts before this returns. */
  async register(publicKey: PublicKeyCredentialCreationOptions): Promise<SessionUser> {
    // First, before any await, so it still counts as part of the click.
    const credential = await navigator.credentials.create({ publicKey });
    if (!(credential instanceof PublicKeyCredential)) {
      throw new Error('Passkey creation was cancelled.');
    }
    return this.api.post<SessionUser>('register/passkey/complete', {
      attestation: credential.toJSON(),
    });
  }
}
