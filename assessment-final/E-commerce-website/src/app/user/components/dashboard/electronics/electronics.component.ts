import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { Subscription, switchMap } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit, OnDestroy {

  products: Products[] = [];
  filteredProducts: Products[] = [];

  category: any;
  cart: any;
  subscription!: Subscription;

  constructor( producService: ProductService,
     route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService) {

    producService.getAll()
      .pipe(switchMap((products: any) => {
        this.products = products;
        return route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
          
      });

  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart()).subscribe(cart => this.cart = cart);
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();
  }

}
