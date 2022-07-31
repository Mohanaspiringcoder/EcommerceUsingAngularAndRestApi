import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/classes/product-category';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.css']
})
export class AddProductCategoryComponent implements OnInit {

  constructor() { }
product : ProductCategory = new ProductCategory(0,"");
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.product)
  }
}
