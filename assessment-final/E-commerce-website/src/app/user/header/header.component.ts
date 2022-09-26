import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from 'src/app/models/app-user';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appUser !: AppUser;
  cart$!:Observable<ShoppingCart>;
  
  constructor(private auth:AuthService,
    private shoppingCartService: ShoppingCartService) {
   }

   async ngOnInit() {
   this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    this.cart$ =  await this.shoppingCartService.getCart();
    
   }


  logout(){
    this.auth.logout();
  }

}
