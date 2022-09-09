import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material_module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, 
            MaterialModule, 
            FormsModule], // our login component is standalone module thats why we r importing material module here relse need to import in app.module.ts
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  respdata:any

  ProceedLogin(logindata:any){
    if (logindata.valid){
      this.service.ProceedLogin(logindata.value).subscribe(item => {
        this.respdata = item;
        console.log(this.respdata);
      });
    }
    
  }

}
