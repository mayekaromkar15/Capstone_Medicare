import { PortalUserService } from './../../../../services/portal-user.service';
import { PortalUser } from './../../../../entities/portal-user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-portaluserregister',
  templateUrl: './portaluserregister.component.html',
  styleUrls: ['./portaluserregister.component.css']
})
export class PortaluserregisterComponent implements OnInit {
  portalUser : PortalUser = new PortalUser();

  constructor(private _portalUserService : PortalUserService,
    private _router:Router) { }

  ngOnInit(): void {
  }

    onSubmit(){
      this._portalUserService.register(this.portalUser).subscribe(
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
