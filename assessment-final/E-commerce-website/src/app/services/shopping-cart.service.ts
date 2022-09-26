import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Products } from '../models/products';
import { take, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase, 
    private http: HttpClient) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
    // return this.http.post<any>('https://e-commerce-9e675-default-rtdb.firebaseio.com/shopping-carts.json',
    // {dateCreated: new Date().getTime()});
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).valueChanges()
    .pipe(map((x:any) => new ShoppingCart(x.items)));
  }

  private getItem(cartId:string, productId: string){
    return this.db.object('/shopping-carts/'+ cartId +'/items/' + productId);
  }

  private async getOrCreateCartId():Promise<string> {

    let cartId = localStorage.getItem('cartId');

    if (cartId) return cartId;
 
    let result: any = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(product: Products) {
    this.updateItemQuantity(product, 1)
  }

  async removeFromCart(product:Products){
    this.updateItemQuantity(product, -1)
  }

  private async updateItemQuantity(product: Products, change: number){
    let cartId = await this.getOrCreateCartId();
    let item$ =  this.getItem(cartId, product.prodName);
    item$.valueChanges().pipe(take(1)).subscribe(
      (item:any) => {
       item$.update({ product: product, quantity: (item?.quantity || 0) + change});

      }
    );
  }

}
