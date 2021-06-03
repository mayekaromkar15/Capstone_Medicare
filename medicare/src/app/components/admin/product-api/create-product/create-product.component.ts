import { Product } from '../../../../entities/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productCategory = "";
  product : Product = new Product();
  categoryList ;

  constructor(private _productService:ProductService) { }

  public listItems: Array<String> = [];

  ngOnInit(): void {
    this.product.productCategory="Ayush";
    
    this._productService.getDropDownValues().subscribe(
      (data:any)=>{
        console.log("Inside create-component");
        console.log(data);
        this.categoryList = data;
      },
      error=>{
        console.log(error);
        console.log("create-product component contain errors")
      }
    )
  
  }

  onFileChanged(event){
    console.log(event)
  }

  onSubmit(){
    this._productService.addProduct(this.product).subscribe(
      data =>{console.log(data);},
      error=>{console.log(error);});
  }

}
