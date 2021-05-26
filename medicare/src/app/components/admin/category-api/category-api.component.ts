import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-api',
  templateUrl: './category-api.component.html',
  styleUrls: ['./category-api.component.css']
})
export class CategoryApiComponent implements OnInit {

  categories=[
    {
      cid :23,
      title:'programming',
      description:"testing",
    },
    {
      cid :25,
      title:'GK',
      description:"testing",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
