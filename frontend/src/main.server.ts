import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';

const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    providers: [provideRouter(appRoutes)],
  });

export default bootstrap;
