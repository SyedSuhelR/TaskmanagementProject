import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser: User = { id: 0, name: '',email:'', role: '', password: '' };
  passwordErrors = {
    uppercase: false,
    specialCharacter: false,
    number: false,
    length: false
  };
  idExistsError = false;

  constructor(
    private userService: UsersService, 
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Reset newUser to empty state when the component initializes
    this.newUser = { id: 0, name: '',email:'', role: '', password: '' };
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
    this.checkUserIdExists();
    if (userForm.valid && !this.idExistsError && !this.isPasswordInvalid()) {
      this.userService.addUser(this.newUser);
      this.newUser = { id: 0, name: '',email:'', role: '', password: '' };
      this.router.navigate(['/admin-home']);
      this.snackBar.open('User added successfully!', 'Close', {
        duration: 3000
      });
    } else {
      this.snackBar.open('Please fill in the form correctly!', 'Close', {
        duration: 3000
      });
    }
  }

  checkUserIdExists() {
    const id = this.newUser.id;
    const userExists = this.userService.getUserById(id);
    this.idExistsError = !!userExists;
  }

  isPasswordInvalid(): boolean {
    return Object.values(this.passwordErrors).some(error => error);
  }
}
