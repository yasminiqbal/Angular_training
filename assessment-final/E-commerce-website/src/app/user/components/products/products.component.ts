import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/models/products.model';
import { ProductService } from 'src/services/product.service';
import { Observable, switchMap } from 'rxjs';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { ShoppingCart } from 'src/models/shopping-cart.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];
  filteredProducts: Products[] = [];

  category: any;
  cart$!: Observable<ShoppingCart>;
 

  constructor( 
    private producService: ProductService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService) {}

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

}
