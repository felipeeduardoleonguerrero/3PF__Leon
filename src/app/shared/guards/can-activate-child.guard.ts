import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {

  constructor(private studentsService:StudentsService, private router:Router){}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.studentsService.loggedIn) {
        this.router.navigate(['home/login']).then(()=>false);
      } 
      return true;
  }
  
}
