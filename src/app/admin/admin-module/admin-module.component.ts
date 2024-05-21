import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css']
})
export class AdminModuleComponent implements OnInit {
  errorMessage = '';
  enteredMail: string = '';
  enteredPass: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticate()) {
      this.router.navigate(['/home']); // Navigate to home if already authenticated
    }
  }

  onSubmit() {
    this.authService.login(this.enteredMail, this.enteredPass);
    if (this.authService.isAuthenticate()) {
      this.errorMessage = ''; // Reset error message if login is successful
      this.router.navigate(['/home']); // Navigate to home component
    } else {
      this.errorMessage = 'Invalid email or password'; // Set error message for failed login
    }
  }
}
