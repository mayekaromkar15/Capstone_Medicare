import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  id :number;
  constructor(private _productService : ProductService,
    private _route: ActivatedRoute, private _routing: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id']
    console.log(this.id)
    this._productService.deleteProduct(this.id).subscribe(
      data =>{
        console.log("Product deleted Successfully")
        Swal.fire("Success","Product Deleted","info")
        this._routing.navigate(["/admin-dashboard/product"])
        // this._router.navigate(["/home"])
      },
      error => {
        console.log("Delete product component contains some errors"+error);
      }
    )
  }

}
