import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private auth: AuthserviceService,public router: Router) { }

  canActivate(): boolean {
    if (this.auth.isAuthedicated() == true) {
      return true;
    }
    this.router.navigate(['login']);
    console.log("Not authorized")
    return false;
  }
}
