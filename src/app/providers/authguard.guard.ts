
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyServiceService } from './my-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate{
  constructor( private myservice: MyServiceService, private routes: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if ( this.myservice.login()) {
      return true;
    } else {
      return false;
    }
}
}

