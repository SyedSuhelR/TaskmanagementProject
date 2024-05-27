import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  userList: any[] = [];

  constructor(
    private userService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar, // Inject MatSnackBar for notifications
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef for manual change detection
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.userList = data;
    }, error => {
      console.error('Error loading users:', error);
    });
  }

  onView(id: number): void {
    this.router.navigate(['/view-user', id]);
  }

  onDelete(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.userList = this.userList.filter(user => user.userid !== id);
      this.cdr.detectChanges(); // Trigger change detection manually
      this.snackBar.open('User deleted successfully!', 'Close', {
        duration: 3000
      });
    }, error => {
      console.error('Error deleting user:', error);
      this.snackBar.open('Error deleting user!', 'Close', {
        duration: 3000
      });
    });
  }

  onEdit(id: number): void {
    this.router.navigate(['/edit-user', id]);
  }
}
