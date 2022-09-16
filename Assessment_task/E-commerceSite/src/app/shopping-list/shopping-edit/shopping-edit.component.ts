import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/service/shopping-list.service';
import { ProductDetail } from 'src/app/shared/productDetail.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('qtyInput') qtyInputRef: ElementRef;


  constructor(private shopService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const prodName =  this.nameInputRef.nativeElement.value;
    const prodQty =  this.qtyInputRef.nativeElement.value;

    const newProductAdded = new ProductDetail(prodName, prodQty);
    this.shopService.addProduct(newProductAdded);
  }
}
