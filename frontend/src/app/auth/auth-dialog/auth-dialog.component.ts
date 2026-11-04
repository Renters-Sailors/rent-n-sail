import { HttpErrorResponse } from '@angular/common/http';
import {
  afterRenderEffect,
  Component,
  effect,
  ElementRef,
  inject,
  resource,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { AuthService } from '../auth.service';
import { PasskeyPrompt, PasskeyService } from '../passkey.service';
import { SessionUser } from '../session-user';

/** Waits after typing before asking for registration options. */
const typingPauseMs = 300;

/**
 * Sign-in dialog, open while `AuthService.prompt()` is set. The username field offers saved
 * passkeys as autofill (conditional mediation); a new username creates an account instead.
 * Passkey options are fetched ahead of time, so each button starts the browser prompt
 * straight from its click, as Safari requires.
 */
@Component({
  imports: [FormField, FormRoot],
  selector: 'app-auth-dialog',
  styleUrl: './auth-dialog.component.scss',
  templateUrl: './auth-dialog.component.html',
})
export class AuthDialogComponent {
  protected readonly auth = inject(AuthService);
  private readonly passkeys = inject(PasskeyService);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected readonly error = signal<string | null>(null);
  protected readonly busy = signal(false);
  private readonly account = signal({ username: '' });
  protected readonly accountForm = form(this.account);

  /** Sign-in options while the dialog is open; reloaded after each attempt. */
  private readonly signInOptions = resource({
    params: () => this.auth.prompt() ?? undefined,
    loader: () => this.passkeys.signInOptions(),
  });
  /** Registration options for the typed username, once typing pauses. */
  private readonly registration = resource({
    params: () => {
      const username = this.account().username.trim();
      return this.auth.prompt() && username ? username : undefined;
    },
    loader: async ({ params: username, abortSignal }) => {
      await pause(typingPauseMs, abortSignal);
      return { username, publicKey: await this.passkeys.registrationOptions(username) };
    },
  });

  /** Cancels the pending autofill sign-in. */
  private autofill = new AbortController();

  constructor() {
    // Browser only: opens and closes the native dialog to follow the service.
    afterRenderEffect(() => {
      const dialog = this.dialog().nativeElement;
      const prompt = this.auth.prompt();
      untracked(() => {
        if (prompt === null) {
          this.autofill.abort();
          if (dialog.open) dialog.close();
        } else if (!dialog.open) {
          this.error.set(null);
          this.accountForm().reset({ username: '' });
          dialog.showModal();
        }
      });
    });
    // Offers saved passkeys in the username field whenever fresh options arrive.
    effect(() => {
      const publicKey = this.signInOptions.value();
      if (publicKey) untracked(() => void this.startAutofill(publicKey));
    });
  }

  /** Runs in the click's submit event, so the passkey prompt can start right away. */
  protected createAccount(): void {
    const username = this.account().username.trim();
    // Checked only here, so the message doesn't show on blur.
    this.error.set(username ? null : 'Enter a username to create an account.');
    if (!username) return;
    const prepared = this.registration.value();
    if (this.registration.error()) {
      this.error.set(messageFor(this.registration.error()));
      return;
    }
    // The browser allows one passkey request at a time, so autofill goes first.
    this.autofill.abort();
    void this.register(
      prepared?.username === username
        ? this.passkeys.register(prepared.publicKey)
        : // Clicked before the options arrived. Safari may refuse this later prompt.
          this.passkeys
            .registrationOptions(username)
            .then((publicKey) => this.passkeys.register(publicKey)),
    );
  }

  protected signInWithPasskey(): void {
    const publicKey = this.signInOptions.value();
    if (!publicKey) {
      this.error.set(
        this.signInOptions.error()
          ? messageFor(this.signInOptions.error())
          : 'Getting ready. Try again in a moment.',
      );
      return;
    }
    this.error.set(null);
    void this.signIn('dialog', publicKey);
  }

  private async startAutofill(publicKey: PublicKeyCredentialRequestOptions): Promise<void> {
    if (!(await PublicKeyCredential.isConditionalMediationAvailable?.())) return;
    await this.signIn('autofill', publicKey);
  }

  /** Signs in, replacing any pending autofill request; the browser allows only one. */
  private async signIn(
    prompt: PasskeyPrompt,
    publicKey: PublicKeyCredentialRequestOptions,
  ): Promise<void> {
    this.autofill.abort();
    this.autofill = new AbortController();
    const { signal } = this.autofill;
    // Started synchronously: the browser call comes before the first await inside.
    const attempt = this.passkeys.signIn(prompt, publicKey, signal);
    if (prompt !== 'autofill') this.busy.set(true);
    try {
      const user = await attempt;
      if (user) return this.auth.finishSignIn(user);
    } catch (error) {
      if (signal.aborted || (prompt === 'autofill' && isNotAllowed(error))) {
        // Autofill runs in the background, so the browser turning it down is no user error.
        // Some browsers do that right away instead of waiting for a pick.
        return;
      }
      this.error.set(messageFor(error));
    } finally {
      if (prompt !== 'autofill') this.busy.set(false);
    }
    // Fresh options for the next try, which also restarts autofill.
    if (prompt !== 'autofill') this.signInOptions.reload();
  }

  private async register(attempt: Promise<SessionUser>): Promise<void> {
    this.busy.set(true);
    try {
      this.auth.finishSignIn(await attempt);
    } catch (error) {
      this.error.set(
        isNotAllowed(error) ? 'No passkey was created. Try again.' : messageFor(error),
      );
      this.registration.reload();
      this.signInOptions.reload();
    } finally {
      this.busy.set(false);
    }
  }
}

function messageFor(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    const detail: unknown = error.error?.detail;
    return typeof detail === 'string' ? detail : 'Could not reach the server. Try again.';
  }
  if (isNotAllowed(error)) {
    return 'No passkey was used. Pick one, or create an account.';
  }
  return error instanceof Error ? error.message : 'Sign-in failed. Try again.';
}

/** The passkey prompt was dismissed, timed out, or refused by the browser. */
function isNotAllowed(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'NotAllowedError';
}

/** Resolves after `ms`, or rejects once `signal` aborts. */
function pause(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    signal.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(signal.reason);
    });
  });
}
