import { Injectable }  from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {  

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('AuthGuard#canActivate called', this.authService);

    if (this.authService.isLoggedIn()) {
      return true;
    }

    // Navigate to the login page
    this.router.navigate(['/login']);
    return false
  }
}
