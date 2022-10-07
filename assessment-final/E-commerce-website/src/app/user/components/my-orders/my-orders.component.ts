import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { OrderService } from 'src/services/order.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) { 
    
  }

  async ngOnInit() {
    this.orders$ = await this.authService.user$
    .switchMap(u =>
      this.orderService.getOrdersByUser(u.uid)).valueChanges();
      
  }

}
