import { ProductComponent } from './../components/user/product/product.component';
import { Product } from './../entities/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private baseUrl = "http://localhost:9090/products";

  constructor(private _httpClient : HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this._httpClient.get<Product[]>(`${this.baseUrl}`);
  }

  addProduct(product: Product):Observable<Object>{
    return this._httpClient.post(`${this.baseUrl}`, product);
  }

  getProductById(id : number):Observable<Product>{
    return this._httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }

  updateProduct(id : number, product : Product):Observable<Object>{
    return this._httpClient.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id : number): Observable<Product>{
    return this._httpClient.delete<Product>(`${this.baseUrl}/${id}`);
  }

}
