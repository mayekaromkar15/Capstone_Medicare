import { HttpClient } from '@angular/common/http';
import { User } from './../entities/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _httpClient: HttpClient) { }

  register(user : User): Observable<Object>{
    return this._httpClient.post("http://localhost:9090/registerUser", user);
  }
}
