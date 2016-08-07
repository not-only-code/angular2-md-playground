import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideForms } from '@angular/forms';
import { provideRouter, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppComponent, environment } from './app/';
import { routes, authProviders } from './app/app.routes';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  authProviders,
  MdIconRegistry,
  provideForms(),
  HTTP_PROVIDERS,
  provideRouter(routes),
 ]);
