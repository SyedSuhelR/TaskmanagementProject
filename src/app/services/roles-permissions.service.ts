import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RolesPermissionsService {
  private roles: string[] = ['Project Manager', 'Team Member',"Admin"];

  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }
}
