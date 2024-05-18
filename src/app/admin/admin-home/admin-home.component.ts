import { Component,OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit {
  userList:any[]=[];
  constructor(private user_service:UsersService){

  }
  ngOnInit(): void {
      this.userList=this.user_service.getUsers();
  }
  updatedUserList:any[]=[];


    onView(id:number){

    }
    onDelete(id: number) {
      this.user_service.deleteUsers(id);
    }
    
    
    onEdit(id: number) {
      const userToUpdate = this.userList.find(user => user.id === id);
      if (userToUpdate) {
        // You can update the user's properties here
        userToUpdate.name = 'Kotla';
        userToUpdate.role = 'Project Manager';
        // Alternatively, you can open a modal or form for editing
      }
    }
    
}
