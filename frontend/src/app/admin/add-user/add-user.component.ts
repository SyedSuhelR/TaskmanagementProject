import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser: User = { name: '', userRole: '', activeStatus: 'In Active', password: '', email: '' };
  passwordErrors = {
    uppercase: false,
    specialCharacter: false,
    number: false,
    length: false
  };

  constructor(
    private userService: UsersService, 
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Reset newUser to empty state when the component initializes
    this.newUser = { name: '', userRole: '', activeStatus: 'In Active', password: '', email: '' };
  }

  validatePassword(password: string) {
    this.passwordErrors = {
      uppercase: !/[A-Z]/.test(password),
      specialCharacter: !/[\W_]/.test(password),
      number: !/\d/.test(password),
      length: password.length < 6
    };
  }

  onAdd(userForm: any) {
    this.validatePassword(this.newUser.password);
    if (userForm.valid && !this.isPasswordInvalid()) {
      this.userService.addUser(this.newUser).subscribe({
        next: (response) => {
          console.log('User added successfully:', response);
          this.newUser = { name: '', userRole: '', activeStatus: 'In Active', password: '', email: '' };
          this.router.navigate(['/admin-home']);
          this.snackBar.open('User added successfully!', 'Close', {
            duration: 3000
          });
        },
        error: (error) => {
          console.error('Error adding user:', error);
          this.snackBar.open('Error adding user!', 'Close', {
            duration: 3000
          });
        }
      });
    } else {
      this.snackBar.open('Please fill in the form correctly!', 'Close', {
        duration: 3000
      });
    }
  }

  isPasswordInvalid(): boolean {
    return Object.values(this.passwordErrors).some(error => error);
  }
}
