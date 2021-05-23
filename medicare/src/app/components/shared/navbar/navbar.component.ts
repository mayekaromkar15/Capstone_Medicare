import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
