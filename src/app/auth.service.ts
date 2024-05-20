import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string | null = null;

  constructor() {}

  login(username: string, password: string): void {
    // Example logic: Check if username and password are valid
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      this.userRole = 'user';
    } else {
      // Invalid credentials, do not authenticate
      this.isAuthenticated = false;
      this.userRole = null;
    }
  }
  

  logout(): void {
    // Implement logout logic
    this.isAuthenticated = false;
    this.userRole = null;
  }

  isAuthenticate(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): string | null {
    return this.userRole;
  }
}
