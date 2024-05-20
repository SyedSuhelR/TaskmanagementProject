import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RolesPermissionsService, Permissions } from './roles-permissions.service';

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
    const requiredPermission = route.data['permission'] as keyof Permissions;

    const permissions = this.rolesPermissionsService.getPermissions(userRole);
    return permissions[requiredPermission];
  }
}
