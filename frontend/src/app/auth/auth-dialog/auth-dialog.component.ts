import { HttpErrorResponse } from '@angular/common/http';
import {
  afterRenderEffect,
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { form, FormField, FormRoot, required } from '@angular/forms/signals';
import { AuthService } from '../auth.service';
import { PasskeyPrompt, PasskeyService } from '../passkey.service';

/**
 * Sign-in dialog, open while `AuthService.prompt()` is set. The username field offers saved
 * passkeys as autofill (conditional mediation); a new username creates an account instead.
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
  /** Username problems show only once Create account was pressed, not on blur. */
  protected readonly createPressed = signal(false);
  private readonly signingIn = signal(false);
  private readonly account = signal({ username: '' });
  protected readonly accountForm = form(
    this.account,
    (path) => required(path.username, { message: 'Enter a username to create an account.' }),
    { submission: { action: () => this.register() } },
  );
  protected readonly busy = computed(() => this.signingIn() || this.accountForm().submitting());

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
          this.createPressed.set(false);
          this.accountForm().reset({ username: '' });
          dialog.showModal();
          void this.startAutofill();
        }
      });
    });
  }

  /** Replaces an earlier passkey error with the username check. */
  protected pressedCreate(): void {
    this.error.set(null);
    this.createPressed.set(true);
  }

  protected async signInWithPasskey(): Promise<void> {
    this.signingIn.set(true);
    this.error.set(null);
    await this.signIn('dialog');
    this.signingIn.set(false);
  }

  private async startAutofill(): Promise<void> {
    if (!(await PublicKeyCredential.isConditionalMediationAvailable?.())) return;
    await this.signIn('autofill');
  }

  /** Signs in, replacing any pending autofill request; the browser allows only one. */
  private async signIn(prompt: PasskeyPrompt): Promise<void> {
    this.autofill.abort();
    this.autofill = new AbortController();
    const { signal } = this.autofill;
    try {
      const user = await this.passkeys.signIn(prompt, signal);
      if (user) return this.auth.finishSignIn(user);
    } catch (error) {
      if (signal.aborted || (prompt === 'autofill' && isNotAllowed(error))) {
        // Autofill runs in the background, so the browser turning it down is no user error.
        // Some browsers do that right away instead of waiting for a pick.
        return;
      }
      this.error.set(this.messageFor(error));
    }
    // Offer autofill again after a failed explicit attempt.
    if (prompt !== 'autofill') void this.startAutofill();
  }

  private async register(): Promise<void> {
    this.autofill.abort();
    this.error.set(null);
    try {
      this.auth.finishSignIn(await this.passkeys.register(this.account().username.trim()));
    } catch (error) {
      this.error.set(this.messageFor(error));
      void this.startAutofill();
    }
  }

  private messageFor(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      const detail: unknown = error.error?.detail;
      return typeof detail === 'string' ? detail : 'Could not reach the server. Try again.';
    }
    if (isNotAllowed(error)) {
      return 'No passkey was used. Pick one, or enter a username to create an account.';
    }
    return error instanceof Error ? error.message : 'Sign-in failed. Try again.';
  }
}

/** The passkey prompt was dismissed, timed out, or refused by the browser. */
function isNotAllowed(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'NotAllowedError';
}
