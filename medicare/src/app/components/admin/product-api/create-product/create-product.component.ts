import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../../../entities/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productCategory = "";
  product : Product = new Product();
  categoryList ;

  constructor(private _productService:ProductService, private snackBar : MatSnackBar) { }

  public listItems: Array<String> = [];

  ngOnInit(): void {

    this.product.productName = '';
    this.product.productDescription = '';
    this.product.productPrice = 0;
    this.product.productSP = 0;

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

    if(this.product.productName.trim()=='' || this.product.productName == null)
    {
      this.snackBar.open("Product Name cannot be null" ,'Ok',{
        duration:3000
      });
      return
    }

    if(this.product.productDescription.trim()=='' || this.product.productDescription == null)
    {
      this.snackBar.open("Product Description cannot be null" ,'Ok',{
        duration:3000
      });
      return
    }

    if(this.product.productPrice.toLocaleString() === '' || this.product.productPrice.toLocaleString == null ||
    this.product.productPrice <= 0 
    )
    {
      this.snackBar.open("MRP must be a number and must be greater than zero" ,'Ok',{
        duration:3000
      });
      return
    }

    if(this.product.productSP.toLocaleString() === '' || this.product.productSP == null ||
    this.product.productSP > this.product.productPrice 
    )
    {
      this.snackBar.open("Selling Price must not be null and not greater than MRP" ,'Ok',{
        duration:3000
      });
      return
    }



    this._productService.addProduct(this.product).subscribe(
      data =>{console.log(data);},
      error=>{console.log(error);});
      Swal.fire("Product Added Successfully","DOne","success")
  }

}
