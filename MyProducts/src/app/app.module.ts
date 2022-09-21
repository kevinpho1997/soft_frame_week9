import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDataService } from './services/product-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GetAllProductsComponent,
    AddNewProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
