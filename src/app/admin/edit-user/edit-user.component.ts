import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId!: number;
  newUser: any = {};
  userRoles: string[] = ["Project Manager", "Team Member"];
  passwordErrors: any = {
    uppercase: false,
    specialCharacter: false,
    number: false,
    length: false
  };

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
    this.validatePassword(this.newUser.password); // Ensure validation on submit

    if (editForm.valid && this.isPasswordValid()) {
      this.userService.updateUser(this.userId, this.newUser);
      this.resetForm(editForm);
      this.router.navigate(['/admin-home']);
    }
  }

  validatePassword(password: string): void {
    this.passwordErrors.uppercase = !/[A-Z]/.test(password);
    this.passwordErrors.specialCharacter = !/[\W_]/.test(password);
    this.passwordErrors.number = !/\d/.test(password);
    this.passwordErrors.length = password.length < 6;
  }

  isPasswordValid(): boolean {
    return !this.passwordErrors.uppercase && !this.passwordErrors.specialCharacter && !this.passwordErrors.number && !this.passwordErrors.length;
  }

  resetForm(form: any): void {
    form.resetForm();
    this.newUser = {};
  }
}
