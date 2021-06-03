import { Router } from '@angular/router';
import { Category } from './../../../../entities/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  product : Category = new Category();
  selectedFile :File= null;

  constructor(private _productService:CategoryService, private _routing: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }



   //Gets called when the user selects an image
   public onFileChanged(event) {
    //Select File
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
    console.log("Inside event ")
  }

  onSubmit(){
     const fd = new FormData();
     fd.append('file', this.selectedFile, this.selectedFile.name);
    this.product.categoryImagePath = this.selectedFile.name;

    this.http.post("http://localhost:9090/upload-file", fd).subscribe(
      data =>{
        console.log("uploaded");
      }, error =>{
        console.log(error);
      }
    ) 

    this._productService.addProduct(this.product).subscribe(
      data =>
      {
        console.log(data);
        console.log(this.selectedFile.name)

      },
      error=>
      {
        console.log(error);
      }); 
  }
}
