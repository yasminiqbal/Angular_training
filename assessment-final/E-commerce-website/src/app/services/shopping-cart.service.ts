import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Products } from '../models/products';
import { take, map, Observable, pipe } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }


  async getCart(): Promise<Observable<ShoppingCart>> 
  {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).snapshotChanges()
    .pipe(map((result:any) => {
      let key = result.key;
      let items = key? result.payload.val().items : {};
      return new ShoppingCart(items);
    }));
  }
 

  async addToCart(product: Products) {
    this.updateItem(product, 1)
  }


  async removeFromCart(product:Products){
    this.updateItem(product, -1)
  }

  async clearCart(){
    let cartId =  await this.getOrCreateCartId();
    this.db.object('/shopping-carts/'+cartId + '/items').remove();
  }


  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }


  private getItem(cartId:string, productId: string){
    return this.db.object('/shopping-carts/'+ cartId +'/items/' + productId);
  }


  private async getOrCreateCartId() : Promise<string> {

    let cartId = localStorage.getItem('cartId');

    if (cartId) return cartId;

    let result:any = await this.create();
    localStorage.setItem('cartId', result.key );
    return result.key;
  }


  private async updateItem(product: Products, change: number){
    
    let cartId = await this.getOrCreateCartId();
    let item$ =  await this.getItem(cartId, product.id);
    item$.snapshotChanges().pipe(take(1)).subscribe(
      (item:any) => { 
        let quantity = (item.payload.val() ? item.payload.val().quantity : 0) + change;

        if(quantity === 0 ) item$.remove();

        else item$.update({ 
        product: product,  quantity: (item.payload.val() ? item.payload.val().quantity : 0) + change
      });
  });
  }

}
