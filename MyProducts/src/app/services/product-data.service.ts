import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product) {

  }

  getProductList() {

  }

  getItem(productID: any) {

  }

  updateProduct(product: Product) {

  }

  deleteProduct(productID: any) {
    
  }

  checkValidId(productID: any){

  }

  getProductCount() {
    
  }
}
