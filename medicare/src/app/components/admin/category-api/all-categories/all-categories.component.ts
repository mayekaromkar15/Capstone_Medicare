import { Router } from '@angular/router';
import { Category } from './../../../../entities/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  categories=[];

  product : Category[];

  constructor(private _categoryService : CategoryService, private _routing: Router) { }

  ngOnInit(): void {

      this._categoryService.getAllProducts().subscribe(
        data => {
          this.categories = data;
          console.log(data)
         
        }
      )
      
  }
  
  


}
