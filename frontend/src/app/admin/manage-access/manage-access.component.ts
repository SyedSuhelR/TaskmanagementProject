import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-access',
  templateUrl: './manage-access.component.html',
  styleUrls: ['./manage-access.component.css']
})
export class ManageAccessComponent implements OnInit {
  userList: any[] = [];
  loading: boolean = false; // Add a loading state

  constructor(
    private userService: UsersService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true; // Set loading to true before making the request
    this.userService.getUsers().subscribe(
      data => {
        this.userList = data;
        this.loading = false; // Set loading to false after data is loaded
      },
      error => {
        console.error('Error loading users:', error);
        this.snackBar.open('Error loading users!', 'Close', { duration: 3000 });
        this.loading = false; // Set loading to false if there is an error
      }
    );
  }

  onActiveStatusChange(userId: number, event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const newActiveStatus = selectElement.value;
    this.updateUserActiveStatus(userId, newActiveStatus);
  }

  updateUserActiveStatus(userId: number, newActiveStatus: string): void {
    this.userService.updateUserActiveStatus(userId, newActiveStatus).subscribe(
      () => {
        console.log('User active status updated successfully');
        this.snackBar.open('User active status updated successfully!', 'Close', { duration: 3000 });
        // Optionally, you can reload the user list after updating the status
        this.loadUsers();
      },
      error => {
        console.error('Error updating user active status:', error);
        this.snackBar.open('Error updating user active status!', 'Close', { duration: 3000 });
      }
    );
  }
}
