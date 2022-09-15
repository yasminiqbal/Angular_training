import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../shared/productDetail.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  productDetail : ProductDetail[] = [
    new ProductDetail('Mobile',2),
    new ProductDetail('watch', 1)
  ];

  constructor() { }

  ngOnInit(): void { 
  }

  onProductAdded(product: ProductDetail){
    this.productDetail.push(product);
  }

}
