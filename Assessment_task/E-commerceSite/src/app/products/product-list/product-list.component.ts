import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [ 
    new Product('Apple', "IPhone 12 128GB - Blue", "https://images-eu.ssl-images-amazon.com/images/I/71ZOtNdaZCL._AC._SR360,460.jpg"),
    new Product('Oppo A54', "Starry Blue, 4GB RAM, 64GB Storage with No Cost EMI ", "https://images-eu.ssl-images-amazon.com/images/I/71k86pEH5LS._AC._SR360,460.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
