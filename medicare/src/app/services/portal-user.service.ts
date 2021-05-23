import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortalUser } from './../entities/portal-user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortalUserService {

  constructor(private _httpClient: HttpClient) { }

  register(portalUser : PortalUser): Observable<Object>{
    return this._httpClient.post("http://localhost:8081/user/", portalUser);
  }
}
