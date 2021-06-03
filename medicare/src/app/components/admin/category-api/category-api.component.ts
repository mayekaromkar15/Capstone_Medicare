import { Category } from './../../../entities/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-api',
  templateUrl: './category-api.component.html',
  styleUrls: ['./category-api.component.css']
})
export class CategoryApiComponent implements OnInit {

  
  product : Category[];

  constructor(private _categoryService : CategoryService) { }

  ngOnInit(): void {

      this._categoryService.getAllProducts().subscribe(
        data => {
          this.product = data;
          console.log(data)
        }
      )
      
  }

}
