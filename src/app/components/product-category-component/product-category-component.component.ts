import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/classes/product-category';
import { ProductManagementServiceService } from 'src/app/services/product-management-service.service';

@Component({
  selector: 'app-product-category-component',
  templateUrl: './product-category-component.component.html',
  styleUrls: ['./product-category-component.component.css']
})
export class ProductCategoryComponentComponent implements OnInit {
  productCategoryList: ProductCategory[] = [];
  constructor(private productService : ProductManagementServiceService,private route :Router) { }

  ngOnInit(): void {
    this.getAllProductDetails();
  }

getAllProductDetails(){
  this.productService.getAllProductCategory().subscribe(data =>{
    console.log(data)
    this.productCategoryList = data
  })
}

addProductCategoryDetails(){
  this.route.navigateByUrl("/addProductCategoryDetails")
}

}
