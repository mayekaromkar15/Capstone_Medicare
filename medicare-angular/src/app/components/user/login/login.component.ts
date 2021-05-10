import { User } from './../../../entities/user';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  constructor(private _loginService : LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

  private saveUser(){
    this._loginService.createUser(this.user).subscribe(
      data=> {
        console.log(data);
        console.log("Successfully logged in")
      }
    )
  }

}
