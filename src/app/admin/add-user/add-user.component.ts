import { Component,OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{

  constructor(private add_user:UsersService){}

  ngOnInit(): void {
      
  }
  newUser:any={};

  onAdd(){

   this.add_user.addUsers(this.newUser);
  }

}
