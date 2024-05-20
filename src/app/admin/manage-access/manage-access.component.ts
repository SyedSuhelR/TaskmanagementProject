import { Component, OnInit } from '@angular/core';
import { RolesPermissionsService,Permissions } from '../../roles-permissions.service';

@Component({
  selector: 'app-manage-access',
  templateUrl: './manage-access.component.html',
  styleUrl: './manage-access.component.css'
})
export class ManageAccessComponent implements OnInit {
  roles = ['Project Manager', 'Team Member'];
  permissions: { [role: string]: Permissions } = {};

  constructor(private rolesPermissionsService: RolesPermissionsService) {}

  ngOnInit() {
    this.roles.forEach(role => {
      this.permissions[role] = this.rolesPermissionsService.getPermissions(role);
    });
  }

  updatePermissions(role: string, permissionKey: keyof Permissions, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.permissions[role][permissionKey] = inputElement.checked;
    this.rolesPermissionsService.updatePermissions(role, this.permissions[role]);
  }

  getPermissionLabel(permissionKey: keyof Permissions): string {
    const labels: { [key in keyof Permissions]: string } = {
      canViewAllProjects: 'All Projects Details',
      canAddTeamMembers: 'Add Team Members',
      canDeleteTeamMembers: 'Delete Team Members',
      canAssignTasks: 'Assign Tasks',
      canCreateTasks: 'Create Tasks',
      canUpdateMilestones: 'Update Milestone',
    };
    return labels[permissionKey];
  }
}