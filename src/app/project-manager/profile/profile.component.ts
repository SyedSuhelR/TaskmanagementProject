import { Component } from '@angular/core';
import { ProfileService } from '../../services/project-manager-profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  showProfile: boolean = true;
  editing: boolean = false;
  profile: any = { name: '', email: '', mobile: '' }; // Initialize profile to avoid undefined

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.profile = this.profileService.getProfile() || this.profile; // Use default profile if not retrieved
  }

  toggleProfile() {
    this.showProfile = this.showProfile;
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
