import { ProductService } from 'src/app/services/product.service';
import { Product } from './../../../../entities/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

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
