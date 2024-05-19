import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId!: number;
  newUser: any = {};
  userRoles: string[] = ["Project Manager", "Team Member"]; // Define available user roles

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.newUser = { ...this.userService.getUserById(this.userId) };
  }

  onUpdate(editForm: any): void {
    if (editForm.valid) {
      this.userService.updateUser(this.userId, this.newUser);
      this.resetForm(editForm); // Call resetForm method to clear the form
      this.router.navigate(['/admin-home']);
    } 
  }

  resetForm(form: any): void {
    form.resetForm(); // Reset the form fields to their initial state
    this.newUser = {}; // Clear the newUser object
  }
}
