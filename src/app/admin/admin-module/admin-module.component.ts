import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css']
})
export class AdminModuleComponent {
  @ViewChild('name') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('password') passwordInput!: ElementRef<HTMLInputElement>;

  originalEmail = "admin@gmail.com";
  originalPassword = "admin@123";
  errorMessage = '';
  enteredMail:string='';
  enteredPass:string='';

  constructor() { }

  onSubmit() {

    if (this.originalEmail === this.enteredMail && this.originalPassword === this.enteredPass) {
      this.errorMessage = ''; // Reset error message if login is successful
    } else {
      this.errorMessage = 'Invalid email or password'; // Set error message for failed login
    }
  }
}
