import { Component,  OnInit } from '@angular/core';
import { Observable  } from 'rxjs';
import { ShoppingCart } from 'src/app/models/shopping-cart.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart$ !: Observable<ShoppingCart>;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
   this.cart$ =  await this.shoppingCartService.getCart();
  
   
  }
   

}
