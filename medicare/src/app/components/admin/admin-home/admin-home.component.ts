import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private _adminService :AdminService){}

  usersCount;
  categoriesCount;
  productCount;

  ngOnInit(){
    this._adminService.getUserCount().subscribe(
      data=>{
        console.log("inside admin-home get user count component")
        
        this.usersCount=data;
        console.log(this.usersCount);
      },
      error=>{
        console.log(error);
      }
    )

    this._adminService.getCategoryCount().subscribe(
      data=>{
        console.log("inside admin-home get category count component")
        this.categoriesCount=data;
        console.log(this.categoriesCount);
      },
      error=>{
        console.log(error);
      }
    )

    this._adminService.getProductCount().subscribe(
      data=>{
        console.log("inside admin-home get product count component")
        this.productCount=data;
        console.log(this.productCount);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
