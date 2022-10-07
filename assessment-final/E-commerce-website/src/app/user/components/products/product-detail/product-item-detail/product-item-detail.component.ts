import { Component, Input } from '@angular/core';
import { Products } from 'src/models/products.model';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {

  @Input('product') product!:Products;

  constructor() { }


  ngOnInit(): void {
  }
}
