import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { Observable, Subscription, switchMap } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ShoppingCart } from 'src/app/models/shopping-cart';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  products: Products[] = [];
  filteredProducts: Products[] = [];

  category: any;
  cart$!: Observable<ShoppingCart>;
  // subscription!: Subscription;

  constructor( 
    private producService: ProductService,
     private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService) {

  
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();

    this.populateProducts();
    

  }

  private populateProducts(){
    this.producService.getAll()
    .pipe(switchMap((products: any) => {
      this.products = products;
      return this.route.queryParamMap;
    }))
    .subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
      
    });
  }

  private applyFilter(){
    this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;
  }

  // ngOnDestroy(): void {

  //   this.subscription.unsubscribe();
  // }

}
