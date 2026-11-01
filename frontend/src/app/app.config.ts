import { IMAGE_CONFIG, IMAGE_LOADER } from '@angular/common';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  provideRouter,
  RouteReuseStrategy,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { routes } from './app.routes';
import { KeepAliveRouteReuseStrategy } from './keep-alive-route-reuse-strategy';
import { provideClientHydration } from '@angular/platform-browser';
import { backendApiInterceptor } from './backend-api-url';
import { rentalImageLoader } from './discover-rental-page/discover-rental-image-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions({
        skipInitialTransition: true,
        // Animate only between routes marked `rentalImageTransition` (discover ↔ booking).
        // Other navigations keep an untyped transition that styles.scss makes instant;
        // skipping it instead would log an AbortError in dev mode on every navigation.
        onViewTransitionCreated: ({ transition, from, to }) => {
          if (hasRentalImageTransition(from) && hasRentalImageTransition(to)) {
            transition.types.add('rental-image');
          }
        },
      }),
    ),
    { provide: RouteReuseStrategy, useClass: KeepAliveRouteReuseStrategy },
    { provide: IMAGE_LOADER, useValue: rentalImageLoader },
    { provide: IMAGE_CONFIG, useValue: { breakpoints: [640, 960, 1440] } },
    provideHttpClient(withInterceptors([backendApiInterceptor])),
    provideClientHydration(),
  ],
};

function hasRentalImageTransition(root: ActivatedRouteSnapshot): boolean {
  let route = root;
  while (route.firstChild) route = route.firstChild;
  return route.data['rentalImageTransition'] === true;
}
