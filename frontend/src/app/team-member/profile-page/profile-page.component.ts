import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service'; // Ensure the path is correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  editing: boolean = false;
  profile: any = { name: '', email: '', mobile: '' }; // Initialize profile to avoid undefined

  constructor(private profileService: ProfileService,private router:Router) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.profile = this.profileService.getProfile() || this.profile; // Use default profile if not retrieved
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  saveProfile() {
    if (this.profile) {
      this.profileService.updateProfile(this.profile);
      this.toggleEdit(); // Exit editing mode after saving
    }
  }
  navigateToMainPage(){
    this.router.navigate(['/task-list']); 
  }
}
