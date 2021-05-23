import { HttpClient } from '@angular/common/http';
import { NullTemplateVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

constructor(private http: HttpClient) { }

baseurl = 'http://localhost:9090';

public getCurrentUser(){
  return this.http.get(`${this.baseurl}/current-user`);
}

// generate token
  public generateToken(loginData:any){
    return this.http.post(`${this.baseurl}/generate-token`,loginData);
  }


  // login user : set token in local storage
  public loginUser(token){
    localStorage.setItem('token',token);
    return true;
  }

  // to check if user is logged in 
  public isLoggedIn(){
    let tokenStr = localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr == '' || tokenStr ==null)
    {
      return false;
    }else
    {
      return true;
    }
  }

  // to logout the user and token
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  // to get the token from local storage
  public getToken(){
    return localStorage.getItem("token")
  }

  //set user details 
  public setUser(user){
    localStorage.setItem('user', JSON.stringify(user))
  }

  // to get user details
  public getUser(){
    let userStr = localStorage.getItem("user")
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }

  // to get user roles.
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }


}
