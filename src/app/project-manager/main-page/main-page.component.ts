import { Component, OnInit } from '@angular/core';
// import "~@fortawesome/fontawesome-free/css/all.css";


import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
  
})
export class MainPageComponent implements OnInit {
  projects: any[]=[];

  constructor(private router: Router, ) { }

  ngOnInit(): void {
  
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
}
