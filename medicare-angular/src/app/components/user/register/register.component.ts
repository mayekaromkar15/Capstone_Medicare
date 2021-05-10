import { User } from './../../../entities/user';
import { RegisterService } from './../../../services/register.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();

  constructor(private _registerService : RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.registerUser();
  }

  private registerUser(){
    this._registerService.register(this.user).subscribe(
      data =>{
        console.log(data);
      }
    );
  }
}
