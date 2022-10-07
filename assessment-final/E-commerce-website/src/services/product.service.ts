import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

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
    // return this.db.list('/products');
    return this.http.get("https://e-commerce-9e675-default-rtdb.firebaseio.com/products.json")
    .pipe(
      map(responseData => {
        const prodArray:string[] = [];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            prodArray.push({...responseData[key], id:key});
          }
        }
        return prodArray;
      }
        )
    );
  }

  get(productId){
    return this.db.object('/products/'+productId).valueChanges();
    // return this.http.get("https://e-commerce-9e675-default-rtdb.firebaseio.com/products/.json?"+productId);
  }

  update(productId, product){
    return this.db.object('/products/'+productId).update(product);
  }

  delete(productId){
    return this.db.object('/products/'+productId).remove();
  }
}
