import { ProductCart } from './../entities/product-cart';
import { Product } from './../entities/product';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }
  subject   = new Subject();

  sendMsg(cart){// here productcart is similar to product
    console.log(cart)
    this.subject.next(cart) // triggering an event
  }

  getMsg(){
    return this.subject.asObservable()
  }

}
