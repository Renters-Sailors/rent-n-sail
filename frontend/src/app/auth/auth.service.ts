import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PasskeyService } from './passkey.service';
import { SessionUser } from './session-user';

interface SignInPrompt {
  /** Heading for the sign-in dialog, e.g. "Sign in to book". */
  reason: string;
  resolve: (signedIn: boolean) => void;
}

/** Who is signed in, and asking for sign-in only when something needs it. */
@Service()
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly passkeys = inject(PasskeyService);

  /** `undefined` until the server has been asked; `null` when signed out. */
  private readonly user = signal<SessionUser | null | undefined>(undefined);
  private readonly pending = signal<SignInPrompt | null>(null);

  readonly username = computed(() => this.user()?.username ?? null);
  /** Heading of the open sign-in dialog, or null when it's closed. */
  readonly prompt = computed(() => this.pending()?.reason ?? null);

  /**
   * Resolves true once signed in; false if cancelled. Tries the session cookie, then this
   * device's passkey, and only then shows the sign-in dialog. Call it from a click: browsers
   * only show passkey prompts right after one.
   */
  async ensureSignedIn(reason: string): Promise<boolean> {
    if ((await this.loadUser()) || (await this.signInImmediately())) return true;
    this.settle(false);
    return new Promise((resolve) => this.pending.set({ reason, resolve }));
  }

  /** Called by the sign-in dialog. */
  finishSignIn(user: SessionUser): void {
    this.user.set(user);
    this.settle(true);
  }

  /** Called by the sign-in dialog. */
  cancelSignIn(): void {
    this.settle(false);
  }

  async signOut(): Promise<void> {
    await firstValueFrom(this.http.delete<void>('session'));
    this.user.set(null);
  }

  /** Signs in with this device's passkey, without the dialog, where the browser allows it. */
  private async signInImmediately(): Promise<boolean> {
    if (!(await this.passkeys.supportsImmediate())) return false;
    try {
      const user = await this.passkeys.signIn('immediate');
      if (user) this.user.set(user);
      return user !== null;
    } catch {
      // No passkey here, cancelled, or unknown to the server: the dialog handles all of these.
      return false;
    }
  }

  private settle(signedIn: boolean): void {
    this.pending()?.resolve(signedIn);
    this.pending.set(null);
  }

  // Asked lazily from the browser only: a server-rendered answer has no cookie, so it'd be wrong.
  private async loadUser(): Promise<SessionUser | null> {
    if (this.user() === undefined) {
      try {
        const request = this.http.get<SessionUser | null>('session', { transferCache: false });
        this.user.set(await firstValueFrom(request));
      } catch {
        // Unknown; ask again next time. The dialog will show any real backend error.
        return null;
      }
    }
    return this.user() ?? null;
  }
}
