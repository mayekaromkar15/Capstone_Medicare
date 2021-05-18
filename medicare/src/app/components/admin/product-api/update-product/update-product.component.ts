import { Product } from '../../../../entities/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id : number;
  product : Product = new Product();

  constructor(private _productService: ProductService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    console.log(this.id);
    console.log(this.id);

    this._productService.getProductById(this.id).subscribe(
      data=>{
        this.product = data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }

  onSubmit(){
    this._productService.updateProduct(this.id, this.product).subscribe(
      data =>
      {
        console.log(data);
        console.log("Product data successfully saved")
        // this.gotohomepage();
      },
      error=>
      {
        console.log(error);
      });
  }
}
