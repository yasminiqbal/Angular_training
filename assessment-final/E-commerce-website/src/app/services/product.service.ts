import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase,
    private http: HttpClient) { }

  create(product){
    return this.db.list('/products').push(product);
    // return this.http.post('https://e-commerce-9e675-default-rtdb.firebaseio.com/products.json', product);
  }
 

  getAll(){
    return this.db.list('/products');
  }

  get(productId){
    return this.db.object('/products/'+productId).valueChanges();
  }

  update(productId, product){
    return this.db.object('/products/'+productId).update(product);
  }

  delete(productId){
    return this.db.object('/products/'+productId).remove();
  }
}
