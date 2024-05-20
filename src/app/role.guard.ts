import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const expectedRole = next.data['expectedRole'];

     // Remove the extra dot after data
    // Change isAuthenticate to isAuthenticated
    // console.log(this.authService.isAuthenticate());
    // console.log(this.authService.getUserRole());
    // console.log(expectedRole);
    if (!this.authService.isAuthenticate() || this.authService.getUserRole() !== expectedRole) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    
    return true;
  }
}
