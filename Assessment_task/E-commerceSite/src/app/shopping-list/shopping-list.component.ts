import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../shared/productDetail.model';
import { ShoppingListService } from '../service/shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  productDetail : ProductDetail[];

  constructor(private shopService: ShoppingListService) { }

  ngOnInit() { 
    this.productDetail = this.shopService.getProductDetail();

    this.shopService.productsChanged.subscribe(
      (productDetail: ProductDetail[]) => {
        this.productDetail = productDetail;
      }
    )
  }

}
