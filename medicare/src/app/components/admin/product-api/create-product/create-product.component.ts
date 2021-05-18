import { Product } from '../../../../entities/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product : Product = new Product();

  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
  }



  onSubmit(){
    this._productService.addProduct(this.product).subscribe(
      data =>
      {
        console.log(data);
        // this.gotohomepage();
      },
      error=>
      {
        console.log(error);
      });
  }

}
