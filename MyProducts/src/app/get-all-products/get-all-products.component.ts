import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { Product } from '../models/product';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private prodServ: ProductDataService, private router: Router) { }

  ngOnInit(): void {
    this.prodServ.getProductList().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: any) {
    if(confirm("Delete this item?")) {
      this.prodServ.deleteProduct(id).subscribe((data) => {
        this.products = data;
      });
    }
  }

}
