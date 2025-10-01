import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection,importProvidersFrom  } from '@angular/core';
import {  provideRouter,  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
       importProvidersFrom(FormsModule),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideClientHydration(),

    // 2. Add the providers here
    provideAnimations(), // required animations providers
    provideToastr({ timeOut: 10000,
  positionClass: 'toast-bottom-right',
  preventDuplicates: true,}),


  ]
};
