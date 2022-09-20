import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postProduct(data:any){
    // return this.http.post<any>("http://localhost:3000/productList/", data);
    return this.http.post<any>("https://e-commerce-9e675-default-rtdb.firebaseio.com//admin/productList/", data);
  }

  getProduct(){
    // return this.http.get<any>("http://localhost:3000/productList/");
    return this.http.get<any>("https://e-commerce-9e675-default-rtdb.firebaseio.com//admin/productList/");
  }

  putProduct(data:any, id:number){
    // return this.http.put<any>("http://localhost:3000/productList/"+id, data);
    return this.http.put<any>("https://e-commerce-9e675-default-rtdb.firebaseio.com//admin/productList/"+id, data);
  }

  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id);
    // return this.http.put<any>("https://e-commerce-9e675-default-rtdb.firebaseio.com//admin/productList/"+id);
  }

  getAdminLogin(){
    return this.http.get<any>("http://localhost:3000/superuser/")
  }
}
