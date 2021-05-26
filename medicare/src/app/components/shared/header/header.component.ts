import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor(public _loginService  : LoginService, private _routing: Router) { }

  isLoggedIn = false;
  user = null;

  ngOnInit(): void {
    this.isLoggedIn = this._loginService.isLoggedIn();
    this.user=this._loginService.getUser();
    this._loginService.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn = this._loginService.isLoggedIn();
    this.user=this._loginService.getUser();
    }
    )
  }

  logout(){
    this._loginService.logout();
    window.location.reload();


  }

}
