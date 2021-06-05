import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private baseUrl = "http://localhost:9090/";

  constructor(private _httpClient: HttpClient, private loginservice: LoginService) { }

  addProduct(product: Product){
    var user = this.loginservice.getUser();
    return this._httpClient.post(`${this.baseUrl}addToCart/${user.username}`, product);
  }


  getProducts(){
    var user = this.loginservice.getUser();
    return this._httpClient.get(`${this.baseUrl}getCartProducts/${user.username}`);
  }


}
