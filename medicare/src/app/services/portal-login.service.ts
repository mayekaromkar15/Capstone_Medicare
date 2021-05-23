import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortalLoginService {

  constructor(private http: HttpClient) { }


baseurl = 'http://localhost:8081';

  public generateToken(loginData:any){
    return this.http.post(`${this.baseurl}/generate-token`,loginData);
  }
}
