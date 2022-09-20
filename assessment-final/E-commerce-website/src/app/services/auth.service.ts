import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user$: Observable<firebase.User> | any;

  constructor(private afauth: AngularFireAuth, private route: ActivatedRoute) { 
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
  
}
