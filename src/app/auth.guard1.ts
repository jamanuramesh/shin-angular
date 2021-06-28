import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard1 implements CanActivate {
  regid=localStorage.getItem('registeredId');
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.regid!=null)
      {
        window.location.href = "/jbdashboard";
      }
      else
      {
        return true;
      }
  }
}