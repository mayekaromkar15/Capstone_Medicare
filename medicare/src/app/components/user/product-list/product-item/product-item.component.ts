import { MessengerService } from './../../../../services/messenger.service';
import { ProductCart } from './../../../../entities/product-cart';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem : ProductCart

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }


  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
  }
}
