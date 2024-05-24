import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId!: number;
  user: any = {}; // Initialize as empty object

  constructor(private route: ActivatedRoute, private userService: UsersService) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchUserDetails(this.userId);
  }

  fetchUserDetails(userId: number): void {
    this.user = { ...this.userService.getUserById(userId) };
  }
}
