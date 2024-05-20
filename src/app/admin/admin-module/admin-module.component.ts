import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css']
})

export class AdminModuleComponent implements OnInit{
 
  originalEmail = "admin@gmail.com";
  originalPassword = "admin@123";
  errorMessage = '';
  enteredMail: string = '';
  enteredPass: string = '';

  constructor(private router: Router,private authService: AuthService) { }
  ngOnInit(): void {
      
  }

  onSubmit() {
    if (this.originalEmail === this.enteredMail && this.originalPassword === this.enteredPass) {
      this.errorMessage = ''; // Reset error message if login is successful
      this.authService.login("admin", "admi");
      this.router.navigate(['/home']); 
      
      
      // Navigate to home component
    } else {
      this.errorMessage = 'Invalid email or password'; // Set error message for failed login
    }
  }
}