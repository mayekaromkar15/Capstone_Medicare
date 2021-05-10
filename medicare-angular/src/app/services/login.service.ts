import { User } from './../entities/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient : HttpClient) { }

  createUser(user : User):Observable<Object>{
    return this._httpClient.post("http://localhost:9090/login", user);
  }
}
