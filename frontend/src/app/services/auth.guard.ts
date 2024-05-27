import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RolesPermissionsService } from './roles-permissions.service'; // Assuming you still need this service for roles

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private rolesPermissionsService: RolesPermissionsService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userRole = 'Project Manager'; // Fetch the user's role from the authentication service
    return this.rolesPermissionsService.hasRole(userRole); // Check if the user has a valid role
  }
}
