import { Component, OnInit } from '@angular/core';
import { AdminDialogueComponent } from './admin-dialogue/admin-dialogue.component';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private dialog:MatDialog ) { }


  openDialog() {
    this.dialog.open(AdminDialogueComponent);
   
  }

  ngOnInit(): void {
  }

}
