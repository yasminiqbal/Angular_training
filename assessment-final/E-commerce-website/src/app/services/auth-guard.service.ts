import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : any {
    {
      this.auth.user$.map({
        next: (user) => {
          
          if (user) return true;

          this.router.navigate(['/user/login'], { queryParams: { returnUrl: state.url } });
          return false;
        }
      });
    }
  }

}
