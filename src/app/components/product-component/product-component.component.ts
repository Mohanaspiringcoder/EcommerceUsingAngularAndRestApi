import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ProductManagementServiceService } from 'src/app/services/product-management-service.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  productList: Product[] = [];
  constructor(private productService : ProductManagementServiceService,
              private route :Router) { }

  ngOnInit(): void {
    this.getAllProductDetails();
  }

getAllProductDetails(){
  this.productService.getAllProducts().subscribe(data =>{
    console.log(data)
    this.productList = data
  })
}

addProductDetails(){
  this.route.navigateByUrl("/addProductDetails")
}


}
