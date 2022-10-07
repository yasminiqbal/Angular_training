import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/models/products.model';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 @Input('product') product!:Products;

  constructor( ) { 

  }

  ngOnInit(): void {
  }

}
