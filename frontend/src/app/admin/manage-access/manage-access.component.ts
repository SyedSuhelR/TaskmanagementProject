import { Component, OnInit } from '@angular/core';
import { RolesPermissionsService } from '../../services/roles-permissions.service';

@Component({
  selector: 'app-manage-access',
  templateUrl: './manage-access.component.html',
  styleUrls: ['./manage-access.component.css']
})
export class ManageAccessComponent implements OnInit {
  roles = ['Project Manager', 'Team Member', 'Admin'];

  constructor(private rolesPermissionsService: RolesPermissionsService) {}

  ngOnInit() {
    // Initialization logic if needed
  }

  // Additional methods to manage roles if necessary
}
