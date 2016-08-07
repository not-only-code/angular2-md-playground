import { RouterConfig } from '@angular/router';
import { LoginComponent } from './login';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/login', pathMatch:'full' },
  { path: 'login', component: LoginComponent }
];