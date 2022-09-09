import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }
  ProceedLogin(inputdata:any){
    return this.http.post('http://127.0.0.1:5000/login', inputdata); // this is to get authentication from post method
  }
}
