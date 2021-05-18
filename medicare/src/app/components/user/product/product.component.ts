import { HttpClient } from '@angular/common/http';
import { Product } from './../../../entities/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : Product[];

  constructor(private _prodService : ProductService) { }

  ngOnInit(): void {


      //   this._prodService.getAllUser().subscribe(
      //     (data) =>{
      //       console.log("Inside the Produc component class");
      //       this.product = data;
      //       console.log(this.product);
            
      //     }
      //   )
      this._prodService.getAllProducts().subscribe(
        data => {
          this.product = data;
          console.log(data)
        }
      )
      
  }

  
}
