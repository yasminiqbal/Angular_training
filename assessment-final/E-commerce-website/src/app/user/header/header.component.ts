import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/models/app-user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appUser !: AppUser;
  
  constructor(public auth:AuthService) {
    // auth.appUser$.subscribe(appUser => this.appUser = appUser);
   }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

}
