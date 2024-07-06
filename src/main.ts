import { bootstrapApplication } from '@angular/platform-browser';
// components
import { AppComponent } from '@app/app.component';
// utils
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
