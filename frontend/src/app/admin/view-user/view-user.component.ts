import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar for notifications

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId!: number;
  user: any = {}; // Initialize as empty object
  loading: boolean = false; // Add a loading state

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchUserDetails(this.userId);
  }

  fetchUserDetails(userId: number): void {
    this.loading = true; // Set loading to true before making the request
    this.userService.getUserById(userId).subscribe({
      next: (user) => {
        this.user = user;
        this.loading = false; // Set loading to false after data is loaded
      },
      error: (error) => {
        console.error('Error fetching user details:', error);
        this.snackBar.open('Error fetching user details!', 'Close', { duration: 3000 });
        this.loading = false; // Set loading to false if there is an error
      }
    });
  }
}
