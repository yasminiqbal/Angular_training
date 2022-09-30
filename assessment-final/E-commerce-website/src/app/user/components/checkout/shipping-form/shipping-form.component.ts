import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { ShoppingCart } from 'src/app/models/shopping-cart.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {

  @Input('cart') cart!: ShoppingCart;
  shipping:any = {}; 
  userId!: string;
  userSubscription !: Subscription;



  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid)
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
    

  async placeOrder() {

    let order = new Order(this.userId, this.shipping, this.cart);
    console.log(order)
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);

  }  

}
