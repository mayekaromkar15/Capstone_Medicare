import { ProductCart } from './../../../entities/product-cart';
import { MessengerService } from './../../../services/messenger.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { CartService } from 'src/app/services/cart.service';

interface product{

}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any = [

    // { id: 1, productId : 1, productName : "Test 1", qty : 2, price : 100},
    // { id: 2, productId : 2, productName : "Test 2", qty : 4, price : 150},
    // { id: 3, productId : 3, productName : "Test 3", qty : 1, price : 199},
    // { id: 4, productId : 4, productName : "Test 4", qty : 5, price : 156},
    // { id: 5, productId : 5, productName : "Test 5", qty : 3, price : 200},
  ];

 
  cartTotal = 0;

  constructor(private _msg: MessengerService, private cartService: CartService) { }

  ngOnInit() {

    this.cartService.getProducts().subscribe(
      data=>{
        console.log(data);
        this.filterItems(data);
      }
    )

    this._msg.getMsg().subscribe((cart : Product)=>{
      console.log(cart)
      console.log("subscibe works")
     this.addProductToCart(cart);
  })
} 

  filterItems(products){
    for(let item of products){
      this.addProductToCart(item);
    }
  }



  addProductToCart(cart: Product){


    let productExists = false;

    for(let i in this.cartItems)
      {
        if(this.cartItems[i].productId === cart.productId)
        {
          console.log("Inside here")
           this.cartItems[i].qty++
           productExists = true;
           break;
        }
      }

    if(!productExists){
      console.log("Adding a product")
      this.cartItems.push(
        {
              productId : cart.productId,
              productName : cart.productName, 
              qty :1,
              price : cart.productPrice
        })
        console.log(this.cartItems)
        console.log("Product added successfully")
    }



  //   if(this.cartItems.length === 0){
  //     this.cartItems.push({
  //       productName : product.name, 
  //       qty :1,
  //       price : product.price
  //     })
  //   }else{
  //     for(let i in this.cartItems){
  //       if(this.cartItems[i].productId === product.id){
  //         this.cartItems[i].qty++
  //       }else{
  //         this.cartItems.push({
  //           productName : product.name, 
  //           qty :1,
  //           price : product.price
  //         })
  //       }
  //     }
  //   } 
        

      this.cartTotal=0
      this.cartItems.forEach(item =>{
        console.log("Creating cart")
        this.cartTotal += (item.qty * item.price)
      })
    }
}
