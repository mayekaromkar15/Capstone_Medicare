import { MessengerService } from './../../../services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './../../../entities/product';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _prodService : ProductService, private _msg:MessengerService, 
    private cartService : CartService) { }

  product : Product[];

  cart: Product[];

  ngOnInit(): void {
      this._prodService.getAllProducts().subscribe(
        data => {
          this.product = data;
        }
      )
  }


  handleAddToCart(c){
    this._msg.sendMsg(c)
    console.log(c)
    this.cartService.addProduct(c).subscribe(
      data=> {
        console.log("product added to cart")
      }
    )
  }
}
