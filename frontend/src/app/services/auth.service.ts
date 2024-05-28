import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string = '';
  private users: any[] = [];

  // Hard-coded admin credentials
  private adminEmail = 'admin@gmail.com';
  private adminPassword = 'Admin@123';
  private adminRole = 'Admin';

  constructor(private userService: UsersService) {
    this.loadAuthState(); // Load authentication state from localStorage
    this.loadUsers();
  }

  login(email: string, password: string): void {
    if (email === this.adminEmail && password === this.adminPassword) {
      this.isAuthenticated = true;
      this.userRole = this.adminRole;
      this.saveAuthState(email, this.userRole);
    } else {
      const user = this.users.find(u => u.email === email && u.password === password);
      if (user) {
        this.isAuthenticated = true;
        this.userRole = user.userRole;
        this.saveAuthState(email, this.userRole);
      } else {
        this.isAuthenticated = false;
        this.userRole = '';
        this.clearAuthState();
      }
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = '';
    this.clearAuthState();
  }

  getUserRole(): string {
    return this.userRole;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  private loadUsers(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error loading users:', error);
      }
    );
  }

  private saveAuthState(email: string, userRole: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('auth', JSON.stringify({
        isAuthenticated: this.isAuthenticated,
        userEmail: email,
        userRole: userRole
      }));
    }
  }

  private loadAuthState(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const authState = localStorage.getItem('auth');
      if (authState) {
        const { isAuthenticated, userRole } = JSON.parse(authState);
        this.isAuthenticated = isAuthenticated;
        this.userRole = userRole;
      }
    }
  }

  private clearAuthState(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('auth');
    }
  }
}
