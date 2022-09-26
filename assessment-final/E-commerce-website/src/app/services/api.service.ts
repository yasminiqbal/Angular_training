import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private db: AngularFireDatabase ) { }

  create(product){
    // return this.http.post<any>("http://localhost:3000/productList/", data);
    return this.db.list<any>("/productList").push(product);
  }

  getAll(){
    // return this.http.get<any>("http://localhost:3000/productList/");
    // return this.db.list<any>("/productList");
    return this.http.get<any>("https://e-commerce-9e675-default-rtdb.firebaseio.com/productList.json")
  }

  get(id){
    return this.db.object("/productList/"+id);
    
  }

  update(productId, product){
    return this.db.object('/productList/'+productId).update(product);
  }
  // putProduct(data:any, id:number){
  //   // return this.http.put<any>("http://localhost:3000/productList/"+id, data);
  //   return this.db.list("/productList/"+id, data);
    
  // }

  deleteProduct(id:string){
    return this.http.delete<any>("http://localhost:3000/productList/"+id);
    // return this.http.put<any>("https://e-commerce-9e675-default-rtdb.firebaseio.com/admin/productList/"+id);
  }

  getAdminLogin(){
    return this.http.get<any>("http://localhost:3000/superuser/")
  }
}
