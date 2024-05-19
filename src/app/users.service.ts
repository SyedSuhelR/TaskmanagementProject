import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: any[] = [
    { id: 1, name: "Pavan", role: "Team Member", password: "password1" },
    { id: 2, name: "Pavan", role: "Team Member", password: "password2" },
    { id: 3, name: "Pavan", role: "Team Member", password: "password3" },
    { id: 4, name: "Pavan", role: "Team Member", password: "password4" },
    { id: 5, name: "Pavan", role: "Team Member", password: "password5" },
    { id: 6, name: "Pavan", role: "Team Member", password: "password6" }
  ];

  constructor() { }

  getUsers(): any[] {
    return this.users;
  }

  addUser(user: any): void {
    this.users.push(user);
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  updateUser(id: number, updatedUser: any): void {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
    }
  }

  getUserById(id: number): any {
    return this.users.find(user => user.id === id);
  }
}
