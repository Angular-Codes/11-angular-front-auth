import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validateToken()
              .pipe(
                tap( valid => {
                  !valid && this.router.navigateByUrl('/auth/login')
                })
              );
  }

  canLoad(): Observable<boolean> | boolean  {
    return this.authService.validateToken()
              .pipe(
                tap( valid => {
                  !valid && this.router.navigateByUrl('/auth/login')
                })
              );
  }

}
