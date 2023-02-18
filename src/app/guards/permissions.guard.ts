import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
constructor(private router: Router){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.hasUser()){
      return true
    }
    this.router.navigate(['login']);
    alert("you don't have permissions")
    return false;
  }

hasUser():boolean{
  if(localStorage.getItem("pseudoToken") =="everythinkIsOkYouCanContinue"){
    return true
  }
  return false
}


}
