import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  userList: any[] = [];

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.userList = this.userService.getUsers();
  }

  onView(id: number) {
    this.router.navigate(['/view-user', id]);
  }

  onDelete(id: number) {
    this.userService.deleteUser(id);
    this.userList = this.userService.getUsers(); // Refresh the user list
  }

  onEdit(id: number) {
    this.router.navigate(['/edit-user', id]);
  }
}
