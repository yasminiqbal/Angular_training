import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/app/models/products';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products;
  // filteredProducts!: any[];
  subscription!: Subscription;



  constructor(private productService: ProductService, ) { 
    this.subscription = this.productService.getAll()
    .valueChanges()
    .subscribe(prod => this.products = prod);

  }
  
 ngOnDestroy(): void {
   this.subscription.unsubscribe();
 }

  ngOnInit(): void {
  }

 
  
}
