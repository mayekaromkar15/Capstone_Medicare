import { ProductCart } from './../entities/product-cart';
import { Product } from './../entities/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductcartService {

  constructor() { }

  product : ProductCart[] = [
    new ProductCart(1, 'Product 1', 'This is product 1 description', 200),
    new ProductCart(2, 'Product 2', 'This is product 2 description', 100),
    new ProductCart(3, 'Product 3', 'This is product 3 description', 300),
    new ProductCart(4, 'Product 4', 'This is product 4 description', 400),
    new ProductCart(5, 'Product 5', 'This is product 5 description', 500),
    new ProductCart(6, 'Product 6', 'This is product 6 description', 600),
 
  ]

  getProduct() : ProductCart[]{
    return this.product;
  }
}
