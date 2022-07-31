import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../classes/product';
import { ProductCategory } from '../classes/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementServiceService {

  private productURL = "http://localhost:8080/api/products"
  private productCategoryURL ="http://localhost:8080/api/productcategories"
  constructor(private httpClient : HttpClient) { }

  
  getAllProducts() : Observable<Product[]>{
    console.log(this.httpClient.get<getProducts>(this.productURL).pipe(map(response => response._embedded.products)));
    return this.httpClient.get<getProducts>(this.productURL).pipe(map(response => response._embedded.products))
  }

  getAllProductCategory() : Observable<ProductCategory[]>{
    return this.httpClient.get<getProductCategory>(this.productCategoryURL).pipe(map(response => response._embedded.productcategories))
  }
}


interface getProducts{
  _embedded :{
    products : Product[]
  }
}

interface getProductCategory{
  _embedded :{
    productcategories : ProductCategory[]
  }
}
