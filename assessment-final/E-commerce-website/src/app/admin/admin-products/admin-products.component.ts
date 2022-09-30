import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/app/models/products.model';
import {  Subscription } from 'rxjs';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products!: Products[] ;
  filteredProducts: any[] = [];
  subscription!: Subscription;
 


  constructor(private productService: ProductService ) { 

    this.subscription = this.productService.getAll()
    .subscribe((prod:any) => this.filteredProducts = this.products = prod);

  }
  
  filter(query:string){
    this.filteredProducts = (query)?
    this.products.filter(p => (p.category).toLowerCase().includes(query.toLowerCase())) : 
    this.products;
  }

  ngOnInit(): void {
   
  }

 ngOnDestroy(): void {
   this.subscription.unsubscribe();
 }

}
