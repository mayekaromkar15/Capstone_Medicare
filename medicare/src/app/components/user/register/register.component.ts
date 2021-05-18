import { User } from './../../../entities/user';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();

  constructor(private _registerService : RegisterService,
    private _router:Router) { }

  ngOnInit(): void {
  }

    value = 'Clear me';
  
    onSubmit(){
      this._registerService.register(this.user).subscribe(
        data =>
        {
          console.log(data);
          this.gotohomepage();
        },
        error=>
        {
          console.log(error);
        });
    }

    gotohomepage(){
      this._router.navigate(["/home"])
    }


}
