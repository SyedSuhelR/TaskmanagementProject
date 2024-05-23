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
      this.navigateToRoleBasedRoute(); // Navigate based on user role if already authenticated
    }
  }

  onSubmit() {
    this.authService.login(this.enteredMail, this.enteredPass);
    if (this.authService.isAuthenticate()) {
      this.errorMessage = ''; // Reset error message if login is successful
      this.navigateToRoleBasedRoute(); // Navigate based on user role
    } else {
      this.errorMessage = 'Invalid email or password'; // Set error message for failed login
    }
  }

  private navigateToRoleBasedRoute(): void {
    const userRole = this.authService.getUserRole();
    if (userRole === 'admin') {
      this.router.navigate(['/home']);
    } else if (userRole === 'teammember') {
      this.router.navigate(['/task-list']);
    } else if (userRole === 'projectmanager') {
      // Add navigation for project manager if needed
      this.router.navigate(['/client-information']);
    } else {
      // Handle other roles or unknown roles if necessary
      this.router.navigate(['/unauthorized']); // Example route for unauthorized access
    }
  }
}
