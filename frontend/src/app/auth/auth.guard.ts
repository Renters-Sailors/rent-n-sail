import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

/** Asks for sign-in before entering the route. On cancel, stays put, or goes home on a first load. */
export const authGuard: CanActivateFn = async () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const signedIn = await auth.ensureSignedIn('Sign in to see your reservations');
  if (signedIn) return true;
  const firstLoad = !router.navigated;
  return firstLoad ? router.parseUrl('/') : false;
};
