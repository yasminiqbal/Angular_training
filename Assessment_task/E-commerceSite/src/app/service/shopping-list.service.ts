import { EventEmitter, Injectable } from '@angular/core';
import { ProductDetail } from '../shared/productDetail.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  productsChanged = new EventEmitter<ProductDetail[]>();

  private productDetail : ProductDetail[] = [
    new ProductDetail('Mobile',2),
    new ProductDetail('watch', 1)
  ];

  constructor() { }

  getProductDetail(){
    return this.productDetail.slice();
  }

  addProduct(addProductDetail: ProductDetail){
    this.productDetail.push(addProductDetail);
    this.productsChanged.emit(this.productDetail.slice());
  }
// this func to add product detail to shopping list
  addProductToShopping(prodDetails: ProductDetail[]){
    // for (let pDetails of prodDetails){
    //   this.addProduct(pDetails);
    // }
    // other option to avoid multiple event emitter
    this.productDetail.push(...prodDetails);
    this.productsChanged.emit(this.productDetail.slice())
  }
}
