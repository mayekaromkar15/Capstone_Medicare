import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './../../../entities/user';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();


  constructor(private _registerService : RegisterService,
    private _router:Router, private _snack: MatSnackBar) { }

  ngOnInit(): void {
    this.user.password='';
    this.user.username ='';
    this.user.firstName ='';
    this.user.lastName = '';
    this.user.email = '';
    this.user.phone = '';
  }
  


    onSubmit(){
      
    if(this.user.firstName.trim()=='' || this.user.firstName == null )
    {
      {
        this._snack.open("Please fill First Name" ,'Ok',{
          duration:3000
        });
        return
      } 
    }
    if(this.user.lastName.trim()=='' || this.user.lastName == null )
    {
      {
        this._snack.open("Please fill Last Name" ,'Ok',{
          duration:3000
        });
        return
      } 
    }
    if(this.user.username.trim()=='' || this.user.username == null)
    {
      {
        this._snack.open("Please Enter Valid UserName Name" ,'Ok',{
          duration:3000
        });
        return
      } 
    }
    if(this.user.email.trim()=='' || this.user.email == null || (!this.user.email.endsWith(".com")))
    {
      {
        this._snack.open("Email Address can only end with .com" ,'Ok',{
          duration:3000
        });
        return
      } 
    }
    if(this.user.phone.trim()=='' || this.user.phone == null || 
    (!(this.user.phone.startsWith("9") || this.user.phone.startsWith("8")))||
    this.user.phone.length != 10 )
    {
      {
        this._snack.open("Mobile number must start with 8 or 9 & length must be 10" ,'Ok',{
          duration:3000
        });
        return
      } 
    }
      
    
      if(this.user.password.trim()=='' || this.user.password == null )
    {
      this._snack.open("Please enter password" ,'Ok',{
        duration:3000
      });
      return
    } 


      this._registerService.register(this.user).subscribe(
        data =>
        {
          console.log(data);
          Swal.fire('Succes','User is Successfully registered','success')
          this.gotohomepage();
        },
        error=>
        {
          console.log(error);
        });
    }

    gotohomepage(){
      this._router.navigate(["/login"])
    }


}
