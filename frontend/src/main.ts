import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Only browsers without Temporal (Safari, for now) download the polyfill. The app's
// modules are evaluated before this runs, so they must not use Temporal at load time.
if (!('Temporal' in globalThis)) await import('temporal-polyfill/global');

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
