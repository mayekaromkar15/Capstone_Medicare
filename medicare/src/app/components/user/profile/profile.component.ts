import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = null;
  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
    this.user = this._loginService.getUser();
    console.log(this.user)
  }

}
