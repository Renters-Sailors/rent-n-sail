import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

/** Asks for sign-in before entering the route. On cancel, stays put, or goes home on a first load. */
export const authGuard: CanActivateFn = async () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return (
    (await auth.ensureSignedIn('Sign in to see your reservations')) ||
    (router.navigated ? false : router.parseUrl('/'))
  );
};
