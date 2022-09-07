import { Component, OnInit } from '@angular/core';
import { products } from '../products'; //importing products.ts

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  share() 
  { alert('The product has been shared!');}

  onNotify()
  { alert('You will be notified when the product goes on sale')}

  ngOnInit(): void {
  }

}
