import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductDetail } from '../shared/productDetail.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productSelected = new EventEmitter<Product>();

  private products: Product[] = [ 
    new Product('Apple', 
    "IPhone 12 128GB - Blue", 
    "https://images-eu.ssl-images-amazon.com/images/I/71ZOtNdaZCL._AC._SR360,460.jpg",
    [
      new ProductDetail('Head Phone', 1),
      new ProductDetail('Charger Head', 1)
    ]),
    new Product('Oppo A54', 
    "Starry Blue, 4GB RAM, 64GB Storage with No Cost EMI ", 
    "https://images-eu.ssl-images-amazon.com/images/I/71k86pEH5LS._AC._SR360,460.jpg",
    [
      new ProductDetail('Bluetooth Head Phone', 1),
      new ProductDetail('Phone Case', 1)
    ])
  ];

  constructor(private shoplistService: ShoppingListService) { }

  getRecipes(){
    return this.products.slice();
  }

  addProductsToShoppingList(productDetail: ProductDetail[]){
    this.shoplistService.addProductToShopping(productDetail);
  }
  
}
