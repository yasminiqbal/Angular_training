import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopupAddProductComponent } from './popup-add-product/popup-add-product.component';

@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.css']
})
export class ManageListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(PopupAddProductComponent,{
      width: '30%'
    });
     
   
  }

  ngOnInit(): void {
  }

}




