import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Signed-in only: the guard and passkeys need the browser.
  { path: 'reservations', renderMode: RenderMode.Client },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
