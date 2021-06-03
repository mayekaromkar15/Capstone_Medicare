import { ProductCart } from './../../../entities/product-cart';
import { Product } from './../../../entities/product';
import { ProductcartService } from './../../../services/productcart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  productList : ProductCart[] = []

  constructor(private _productcart : ProductcartService) { }

  ngOnInit(): void {
    this.productList = this._productcart.getProduct()
  }

}
