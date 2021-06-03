import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-user-category',
  templateUrl: './user-category.component.html',
  styleUrls: ['./user-category.component.css']
})
export class UserCategoryComponent implements OnInit {

  constructor(private _categoryService: CategoryService) { }

  categories : Category[];

  ngOnInit(): void {
    this._categoryService.getAllProducts().subscribe(
      data=>{
        console.log(data)
        this.categories = data
      }
    )
  }
}
