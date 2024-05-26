import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  projects: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize your component
  }

  showProjectDetails(project: any) {
    this.router.navigate(['/project', project.id]);
  }

  toggleMenu() {
    const subMenu = document.getElementById("subMenu");
    if (subMenu) {
      subMenu.classList.toggle("open-menu");
    }
  }

  // Close the dropdown if the user clicks outside of it
  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const subMenu = document.getElementById("subMenu");
    if (subMenu && !subMenu.contains(event.target as Node) && !(event.target as HTMLElement).classList.contains('user-pic')) {
      subMenu.classList.remove("open-menu");
    }
  }
}
