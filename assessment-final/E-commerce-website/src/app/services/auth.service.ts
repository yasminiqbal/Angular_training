import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user';
import { UserService } from './user.service';
import {  switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user$: Observable<firebase.User> | any;

  constructor(
    private userService:UserService,
     private afauth: AngularFireAuth, 
     private route: ActivatedRoute) { 
    this.user$ = afauth.authState;
  }

    login(){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl', returnUrl);
      this.afauth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    logout(){
      this.afauth.signOut();
    }

    // get appUser$(): Observable<AppUser>{
    //   return this.user$
    //   .pipe(switchMap((user:UserService) => {
    //     if (user) return this.userService.get(user.uid);
    //     return of(null);
    //   }));
    // }
      
}
 