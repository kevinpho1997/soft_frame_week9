import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { Product } from '../models/product';
// for angular animations
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
  animations: [
    trigger('iderrorState', [
      state('show', style({
        opacity: 1,
        display: 'block'
      })),
      state('hide',style({
        opacity: 0,
        display: 'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ]),
    trigger('noticeState', [
      state('show', style({
        opacity: 1,
        display: 'block'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ]
})
export class AddNewProductComponent implements OnInit {
  // does it have to be this messy?
  // product vars
  productName: string = "";
  productDesc: string = "";
  productPrice: number = 0;
  productUnits: number = 0;
  productId: number = 0;
  productObjId: string = "";

  // ! to ignore the fact no initialisation
  newProd!: Product;
  newProductMessage: string = "";

  // errors
  idErrorMsg: string = "This ID already exists";
  idErrorMsg2: string = "";
  idErrorShow: boolean = false;
  showNotice: boolean = false;

  constructor(private prodService: ProductDataService) { }

  ngOnInit(): void {
  }

  get stateName() {
    return this.idErrorShow ? 'show':'hide';
  }

  get noticeName() {
    return this.showNotice ? 'show':'hide'
  }

  addNewProduct(event: any) {
    event.preventDefault();
    if (this.productId == null) {
      this.idErrorShow = !this.idErrorShow
    } else {
      this.newProd = new Product(
        this.productId, this.productName, this.productDesc, this.productPrice, this.productUnits
      );

      this.prodService.addProduct(this.newProd).subscribe((data) => {
        console.log(data);
        this.showNotice = true;

        if(data.err == null) {
          this.newProductMessage = `product ${data.num}, ${this.productName} was added`;
        } else {
          this.newProductMessage = data.err;
        }

        // zero out values
        this.productId = 0;
        this.productName = "";
        this.productDesc = "";
        this.productPrice = 0;
        this.productUnits = 0;
      });
    }
  }

  checkValidId(event: any) {
    this.showNotice = false;
    this.prodService.checkValidId(event).subscribe((data) => {
      if (data.success == 0) {
        this.idErrorMsg2 = `Something above ${data.topnum}`;
        this.idErrorShow = !this.idErrorShow;
      } else {
        this.idErrorShow = false;
        this.idErrorMsg2 = "";
      }
    })
  }

}
