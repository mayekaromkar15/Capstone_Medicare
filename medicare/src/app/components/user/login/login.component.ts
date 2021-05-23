import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private _loginService: LoginService,
    private _routing: Router) { }

  ngOnInit(): void {
  }

  loginData={
    userName : '',
    password : ''
  }
 
  formSubmit(){
    console.log("form submitted")
    if(this.loginData.userName.trim()=='' || this.loginData.userName == null)
    {
      this.snackBar.open("Username not found" ,'Ok',{
        duration:3000
      });
      return
    }

    if(this.loginData.password.trim()=='' || this.loginData.password == null)
    {
      this.snackBar.open("Password not found" ,'Ok',{
        duration:3000
      });
      return
    }

    //generate token  
    this._loginService.generateToken(this.loginData).subscribe(
      (data: any)=>{
        console.log("Success")
        console.log(data)
        console.log(data.token);

        // login user
        this._loginService.loginUser(data.token);

        this._loginService.getCurrentUser().subscribe(
          (user:any) => {
            this._loginService.setUser(user);
            console.log(user);

            //
            if(this._loginService.getUserRole()=='ADMIN'){
              this._routing.navigate(["/admin-dashboard"])
             this._loginService.loginStatusSubject.next(true);
            }else if(this._loginService.getUserRole()=='NORMAL'){
              this._routing.navigate(["/user-dashboard"])
              this._loginService.loginStatusSubject.next(true);
            }
          }
        );

      },
      error=>{
        console.log("Failure")
        this.snackBar.open("Invalid Credential !!!", 'Ok',{
          duration:3000
        })
      }
    )

  } 

}
