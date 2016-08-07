import { RouterConfig } from '@angular/router';
import { LoginComponent } from './login';
import { AuthService, AuthGuardService } from './shared';
import { HomeComponent } from './home';
import { HomeMainComponent } from './home/home-main';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService], children: [
      { path: '', component: HomeMainComponent }
  ]}
];

export const authProviders = [AuthService, AuthGuardService];