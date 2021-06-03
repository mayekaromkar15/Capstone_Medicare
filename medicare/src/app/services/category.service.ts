import { Category } from './../entities/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

private baseUrl = "http://localhost:9090/categories";

constructor(private _httpClient : HttpClient) { }

getAllProducts(): Observable<Category[]>{
  return this._httpClient.get<Category[]>(`${this.baseUrl}`);
}

addProduct(category: Category):Observable<Object>{
  return this._httpClient.post(`${this.baseUrl}`, category);
}

getProductById(id : number):Observable<Category>{
  return this._httpClient.get<Category>(`${this.baseUrl}/${id}`);
}

updateProduct(id : number, category : Category):Observable<Object>{
  return this._httpClient.put(`${this.baseUrl}/${id}`, category);
}

deleteProduct(id : number): Observable<Category>{
  return this._httpClient.delete<Category>(`${this.baseUrl}/${id}`);
}
}
