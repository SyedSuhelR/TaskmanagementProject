import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service'; // Ensure the path is correct

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.css']
})
export class ProfileIconComponent implements OnInit {
  profile: any = { name: '', email: '', mobile: '' }; // Initialize profile to avoid undefined

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.profile = this.profileService.getProfile() || this.profile; // Use default profile if not retrieved
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
