import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from 'src/models/app-user.model';
import { ShoppingCart } from 'src/models/shopping-cart.model';
import { AuthService } from 'src/services/auth.service';
import { ShoppingCartService } from 'src/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  appUser : AppUser = {
    uid: '',
    name: '',
    email: '',
    isAdmin: false
  };
  cart$!:Observable<ShoppingCart>;
  
  
  constructor(private auth:AuthService,
    private shoppingCartService: ShoppingCartService,
    private cdr: ChangeDetectorRef) {

      this.auth.appUser$.subscribe((appUser:any) => this.appUser = appUser );
   }

   async ngOnInit() {
    this.cart$ =  await this.shoppingCartService.getCart();  
   }

   ngAfterViewInit(): void {
    this.cdr.detectChanges();
   }


  logout(){
    this.auth.logout();
  }

}
