import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor() { }
product : Product = new Product(0,"","","",0,"",false,0,new Date,new Date,0)
  ngOnInit(): void {
  }
onSubmit(){
  console.log(this.product)
}

}
  