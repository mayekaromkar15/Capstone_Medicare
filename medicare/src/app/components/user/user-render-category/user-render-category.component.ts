import { ProductService } from 'src/app/services/product.service';
import { Product } from './../../../entities/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-render-category',
  templateUrl: './user-render-category.component.html',
  styleUrls: ['./user-render-category.component.css']
})
export class UserRenderCategoryComponent implements OnInit {

  id : number;
  product : Product[];

  constructor(private _productService: ProductService, private _route: ActivatedRoute,
     private _routing: Router)  { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    console.log(this.id);
    console.log(this.id);

    this._productService.getProductsByCategory(this.id).subscribe(
      data=>{
        this.product = data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
