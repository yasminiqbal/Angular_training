import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Products } from '../models/products';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-cart').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart() {
    let   cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-cart/' + cartId);
  }

  private getItem(cartId:string, productId: string){
    return this.db.object('/shopping-cart/'+cartId+'/items/' + productId);
  }

  private async getOrCreateCartId():Promise<string> {

    let cartId = localStorage.getItem('cartId');

    if (cartId) return cartId;
 
    let result: any = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(product: Products) {
    let cartId = await this.getOrCreateCartId();
    let item$ =  this.getItem(cartId, product.$key);
    item$.valueChanges().pipe(take(1)).subscribe(
      (item:any) => {
        item$.update({product: product, quantity:(item?.quantity || 0)+ 1});
      }
    );
  }


}
