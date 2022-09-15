import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  style = "max-height: 50px;"

  @Input()
  productItem : Product;

  constructor() { }

  ngOnInit(): void {
  }

}
