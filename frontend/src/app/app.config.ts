import { IMAGE_CONFIG, IMAGE_LOADER } from '@angular/common';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, RouteReuseStrategy, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { KeepAliveRouteReuseStrategy } from './keep-alive-route-reuse-strategy';
import { provideClientHydration } from '@angular/platform-browser';
import { transientRetryInterceptor } from './api/transient-retry.interceptor';
import { backendApiInterceptor } from './backend-api-url';
import { rentalImageLoader } from './discover-rental-page/discover-rental-image-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    { provide: RouteReuseStrategy, useClass: KeepAliveRouteReuseStrategy },
    { provide: IMAGE_LOADER, useValue: rentalImageLoader },
    { provide: IMAGE_CONFIG, useValue: { breakpoints: [640, 960, 1440] } },
    provideHttpClient(
      withInterceptors([
        transientRetryInterceptor,
        backendApiInterceptor,
        // Sees URLs after `backendApiInterceptor` adds the /api/ prefix.
      ]),
    ),
    provideClientHydration(),
  ],
};
