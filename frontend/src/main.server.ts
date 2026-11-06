import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// Vercel's nodejs26.x binary is built without Temporal (v8_enable_temporal_support: 0), unlike the
// official Node 26 builds, so the polyfill loads only there. As in main.ts, the app's modules are
// evaluated before this runs, so they must not use Temporal at load time.
if (!('Temporal' in globalThis)) await import('temporal-polyfill/global');

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
