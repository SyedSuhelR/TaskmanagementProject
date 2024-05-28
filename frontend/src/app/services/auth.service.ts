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
  private adminEmail = 'admin@example.com';
  private adminPassword = 'adminPassword';
  private adminRole = 'Admin';

  constructor(private userService: UsersService) {
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

  isLoggedIn(): boolean { // Renamed from isAuthenticated
    return this.isAuthenticated;
  }

  getUserRole(): string {
    return this.userRole;
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

  private saveAuthState(username: string, role: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('auth', JSON.stringify({
        isAuthenticated: this.isAuthenticated,
        username: username,
        userRole: role
      }));
    }
  }

  private clearAuthState(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('auth');
    }
  }
}
