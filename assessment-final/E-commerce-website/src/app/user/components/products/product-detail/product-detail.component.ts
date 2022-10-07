import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Products } from 'src/models/products.model';
import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!:Products;
  productIdFromRoute:any;
  
  

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.productIdFromRoute = String(routeParams.get('id'));


     // Find the product that correspond with the id provided in route.
     this.productService.get(this.productIdFromRoute).pipe(map(((res:any)=> {
      const prodArray:string[] = [];
      prodArray.push({...res});

      return prodArray;
    }))).subscribe((prod:any)=> this.product = prod[0]);
   
    
      
  }



}
