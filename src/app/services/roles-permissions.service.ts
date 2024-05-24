import { Injectable } from '@angular/core';

export interface Permissions {
  canViewAllProjects: boolean;
  canAddTeamMembers: boolean;
  canDeleteTeamMembers: boolean;
  canAssignTasks: boolean;
  canCreateTasks: boolean;
  canUpdateMilestones: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class RolesPermissionsService {
  private roles: Record<string, Permissions> = {
    'Project Manager': {
      canViewAllProjects: true,
      canAddTeamMembers: true,
      canDeleteTeamMembers: true,
      canAssignTasks: true,
      canCreateTasks: true,
      canUpdateMilestones: true,
    },
    'Team Member': {
      canViewAllProjects: true,
      canAddTeamMembers: false,
      canDeleteTeamMembers: false,
      canAssignTasks: false,
      canCreateTasks: true,
      canUpdateMilestones: true,
    },
  };

  getPermissions(role: string): Permissions {
    return this.roles[role];
  }

  updatePermissions(role: string, permissions: Permissions): void {
    this.roles[role] = permissions;
  }
}
