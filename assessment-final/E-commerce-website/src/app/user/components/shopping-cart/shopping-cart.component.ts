import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$;


  constructor(private shoppingCartService : ShoppingCartService) { }

  async ngOnInit() {
   await (await this.shoppingCartService.getCart()).subscribe(cart => this.cart$ = cart);

  }

  // clearCart(){
  //   this.shoppingCartService.clearCart()
  // }
 
}
