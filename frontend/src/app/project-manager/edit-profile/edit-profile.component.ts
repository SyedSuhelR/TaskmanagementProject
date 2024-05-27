import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/project-manager-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  showProfile: boolean = true;
  editing: boolean = false;
  profile: any = { name: 'John Doe', email: 'john.doe@example.com', mobile: '123-456-7890' }; // Sample profile data

  constructor(private profileService: ProfileService,private router: Router) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    const loadedProfile = this.profileService.getProfile();
    if (loadedProfile) {
      this.profile = loadedProfile;
    }
  }
  navigateToMainPage() {
    this.router.navigate(['/main-page']); // Navigate to main page route
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
}
