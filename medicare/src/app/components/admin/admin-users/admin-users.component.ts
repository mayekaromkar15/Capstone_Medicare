import { AdminService } from './../../../services/admin.service';
import { User } from './../../../entities/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private _adminService :AdminService){}

  users;
  usersCount;
  categoriesCount;
  productCount;

  ngOnInit(){
    this._adminService.getAllUsers().subscribe(
      data=>{
        console.log("inside admin-users component")
        console.log(data);
        this.users=data;
      },
      error=>{
        console.log(error);
      }
    )
  }

 
  


}
