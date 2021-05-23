import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { PortalLoginService } from 'src/app/services/portal-login.service';

@Component({
  selector: 'app-portal-login',
  templateUrl: './portal-login.component.html',
  styleUrls: ['./portal-login.component.css']
})
export class PortalLoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private portalLoginService: PortalLoginService) { }

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
    this.portalLoginService.generateToken(this.loginData).subscribe(
      data=>{
        console.log("Success")
        console.log(data)
      },
      error=>{
        console.log("Failure")
      }
    )

  } 

  

 

}
