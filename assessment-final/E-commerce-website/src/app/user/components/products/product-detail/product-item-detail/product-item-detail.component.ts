import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/models/shopping-cart.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {

  @Input('product') product!:any;

  @Input('shopping-cart') shoppingCart !: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(){
    this.cartService.addToCart(this.product );
  }

}
