import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLogin } from './admin-login.model';


@Component({
  selector: 'app-admin-dialogue',
  templateUrl: './admin-dialogue.component.html',
  styleUrls: ['./admin-dialogue.component.css']
})
export class AdminDialogueComponent implements OnInit {
  hide = true; //for password

  superuser:any;
  loginForm!: FormGroup;
  login:AdminLogin[] = []

  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<AdminDialogueComponent>) { }
 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],    
    });
  }

  // adminLogin(){
  //   this.superuser = this.api.getAdminLogin().subscribe();
  //   if(this.loginForm.valid){
  //     if (!this.superuser.username || !this.superuser.password){
  //       alert("Invalid Credentials");
  //     }else {
  //       this.dialogRef.close()
  //     }
  //   }
    
      
      
    // console.log(this.loginForm.value)}
    

  // }


}
