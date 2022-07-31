import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';
import { ProductCategoryComponentComponent } from './components/product-category-component/product-category-component.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddProductCategoryComponent } from './components/add-product-category/add-product-category.component';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule, Routes } from '@angular/router';
const route : Routes = [
{path : '',component : HomePageComponent}, 
{path :'products',component : ProductComponentComponent},
{path : 'productCategory',component : ProductCategoryComponentComponent},
{path : 'addProductDetails',component :AddProductsComponent},
{path : 'addProductCategoryDetails',component : AddProductCategoryComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductCategoryComponentComponent,
    HomePageComponent,
    AddProductsComponent,
    AddProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
