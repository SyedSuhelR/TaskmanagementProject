import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string = '';

  constructor() {
    this.loadAuthState();
  }

  login(username: string, password: string): void {
    if ((username === 'admin@gmail.com' && password === 'admin@123') ||
        (username === 'teammember@gmail.com' && password === 'teammember@123') ||
        (username === 'projectmanager@gmail.com' && password === 'projectmanager@123')) {
      
      this.isAuthenticated = true;
      if (username === 'admin@gmail.com') {
        this.userRole = 'admin';
      } else if (username === 'teammember@gmail.com') {
        this.userRole = 'teammember';
      } else if (username === 'projectmanager@gmail.com') {
        this.userRole = 'projectmanager';
      }
      
      this.saveAuthState(username, password, this.userRole);
    } else {
      this.isAuthenticated = false;
      this.userRole = '';
      this.clearAuthState();
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = '';
    this.clearAuthState();
  }

  isAuthenticate(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): string {
    return this.userRole;
  }

  private saveAuthState(username: string, password: string, role: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('auth', JSON.stringify({
        isAuthenticated: this.isAuthenticated,
        username: username,
        password: password,
        userRole: role
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
