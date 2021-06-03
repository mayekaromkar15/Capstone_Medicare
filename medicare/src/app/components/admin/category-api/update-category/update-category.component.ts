import { Category } from './../../../../entities/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id : number;
  product : Category = new Category();

  constructor(private _productService: CategoryService, private _route: ActivatedRoute,
     private _routing: Router)  { }

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
        Swal.fire('Succes','Category is Updated Successfully','success')
        this._routing.navigate(["/admin-dashboard/category"])
      },
      error=>
      {
        console.log(error);
      });
  }
}
