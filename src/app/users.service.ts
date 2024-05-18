import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users:any[]=[
    {
      id:1,
      name:"Pavan",
      role:"Team Member"
    },
    {
      id:2,
      name:"Pavan",
      role:"Team Member"
    },
    {
      id:3,
      name:"Pavan",
      role:"Team Member",
    },
    {
      id:4,
      name:"Pavan",
      role:"Team Member"
    },
    {
      id:5,
      name:"Pavan",
      role:"Team Member"
    },
    {
      id:6,
      name:"Pavan",
      role:"Team Member"
    },
  ];

  constructor() { }
  getUsers():any[]{
    return this.users;
}
addUsers(user:any):void{
  console.log(user);
    this.users.push(user);
}
deleteUsers(index:number):void{
    this.users.splice(index,1);
}
updateUsers(index:number,updateduser:any):void{
    this.users[index]=updateduser;
}
}
