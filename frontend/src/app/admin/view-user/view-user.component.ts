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
    this.userService.getUserById(userId).subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (error) => {
        console.error('Error fetching user details:', error);
        this.snackBar.open('Error fetching user details!', 'Close', { duration: 3000 });
      }
    });
  }
}
