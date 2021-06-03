import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  id :number;
  constructor(private _productService : CategoryService,
    private _route: ActivatedRoute, private _routing: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id']
    console.log(this.id)
    this._productService.deleteProduct(this.id).subscribe(
      data =>{
        console.log("Product deleted Successfully")
        Swal.fire("Success","User Deleted","info")
        this._routing.navigate(["/admin-dashboard/category"])
        // this._router.navigate(["/home"])
      },
      error => {
        console.log("Delete product component contains some errors"+error);
      }
    )
  }

}
