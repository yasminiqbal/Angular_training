import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
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


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.productService.productSelected.emit(this.productItem);
  }

}
