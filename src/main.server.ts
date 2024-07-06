import { bootstrapApplication } from '@angular/platform-browser';
// components
import { AppComponent } from '@app/app.component';
// utils
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
