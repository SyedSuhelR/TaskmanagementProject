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
    if (!this.authService.isLoggedIn() || this.authService.getUserRole() !== expectedRole) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    
    return true;
  }
}
