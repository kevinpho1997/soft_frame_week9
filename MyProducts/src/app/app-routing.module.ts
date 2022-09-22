import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [{path: 'products', component: GetAllProductsComponent}, {path: 'addProduct', component: AddNewProductComponent},{path: 'updateProduct', component: UpdateProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
