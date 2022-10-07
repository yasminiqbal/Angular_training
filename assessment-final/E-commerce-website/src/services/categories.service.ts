import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db:AngularFireDatabase, 
    private http: HttpClient) { }

  getAll(){
    // return this.db.list('/categories');
    return this.http.get<any>('https://e-commerce-9e675-default-rtdb.firebaseio.com/categories.json').pipe(
      map(responseData => {
        const categoryArray:string[] = [];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            categoryArray.push({...responseData[key], id:key});
          }
        }
        return categoryArray;
      }
        )
    )
  }

  
}
