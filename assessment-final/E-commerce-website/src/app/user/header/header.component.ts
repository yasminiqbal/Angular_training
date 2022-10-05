import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from 'src/app/models/app-user.model';
import { ShoppingCart } from 'src/app/models/shopping-cart.model';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  appUser !: AppUser;
  cart$!:Observable<ShoppingCart>;
  
  
  constructor(private auth:AuthService,
    private shoppingCartService: ShoppingCartService,
    private cdr: ChangeDetectorRef) {
   }

   async ngOnInit() {
    this.auth.appUser$.subscribe((appUser:any) => this.appUser = appUser);

    this.cart$ =  await this.shoppingCartService.getCart();  
   }

   ngAfterViewInit(): void {
    this.cdr.detectChanges();
   }


  logout(){
    this.auth.logout();
  }

}
