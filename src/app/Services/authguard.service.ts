import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  canActivate(_active: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('emailid') != null) {
      return true;
    }
    alert('pleace Login First !!!!!');
    this._router.navigate(['']);
    return false;
  }

  constructor(private _router:Router) { }
}
