import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  server = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  addProduct(product: Product) {
    return this.http.post<any>(`${this.server}/prod/add`, product);
  }

  getProductList() {
    return this.http.get<any>(`${this.server}/prod/getList`);
  }

  // getItem(productID: any) {

  // }

  updateProduct(product: Product) {
    return this.http.post<any>(`${this.server}/prod/update`, product);
  }

  deleteProduct(productID: any) {
    return this.http.post<any>(`${this.server}/prod/delete`, {'productid': productID});
  }

  checkValidId(productID: any){
    return this.http.post<any>(`${this.server}/validateID`, {'id': productID});
  }

  getProductCount() {
    return this.http.get<any>(`${this.server}/prod/count`);
  }
}
