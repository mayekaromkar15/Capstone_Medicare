import { User } from './../entities/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = "http://localhost:9090/user/";
  private baseUrl1 = "http://localhost:9090/categoryCount";
  private baseUrl2 = "http://localhost:9090/productCount";

  constructor(private _httpClient : HttpClient) { }
  
  getAllUsers(): Observable<User[]>{
    return this._httpClient.get<User[]>(`${this.baseUrl}`);
  }
    
  getProductById(id : number):Observable<User>{
    return this._httpClient.get<User>(`${this.baseUrl}/${id}`);
  }
    
  deleteProduct(id : number): Observable<User>{
    return this._httpClient.delete<User>(`${this.baseUrl}/${id}`);
  }

  getUserCount() : Observable<any>{
    return this._httpClient.get(`${this.baseUrl}userCount`);
  }

  getCategoryCount() : Observable<any>{
    return this._httpClient.get(`${this.baseUrl1}`);
  }

  getProductCount() : Observable<any>{
    return this._httpClient.get(`${this.baseUrl2}`);
  }
}
