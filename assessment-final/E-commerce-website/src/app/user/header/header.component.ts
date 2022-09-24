import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/models/app-user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  appUser !: AppUser;
  
  constructor(private auth:AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
    console.log(this.appUser)
   }


  logout(){
    this.auth.logout();
  }

}
