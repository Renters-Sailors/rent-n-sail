// Vercel's nodejs26.x binary is built without Temporal (v8_enable_temporal_support: 0), unlike the
// official Node 26 builds. The polyfill installs itself only when Temporal is missing.
import 'temporal-polyfill/global';
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
