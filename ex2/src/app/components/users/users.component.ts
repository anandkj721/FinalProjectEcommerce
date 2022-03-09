import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/IUser';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userList : any ;
  totalLength:any;
  page:number=1;
  
  allUsers!:Observable<IUser []>;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers();
}

getAllUsers(){
  this.allUsers=this.userService.getAllUsers();
  console.log("get all users" +this.allUsers);
  
  

 
}
}