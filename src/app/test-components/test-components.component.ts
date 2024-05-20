import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-components',
  templateUrl: './test-components.component.html',
  styleUrl: './test-components.component.css'
})
export class TestComponentsComponent {
  constructor(private router: Router) {}

  navigateAsAdmin(): void {
    this.router.navigate(['/admin']);
  }

  navigateAsUser(): void {
    this.router.navigate(['/user']);
  }
}
