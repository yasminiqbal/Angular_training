import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ProductDetail } from 'src/app/shared/productDetail.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('qtyInput') qtyInputRef: ElementRef;

  @Output() productAdded = new EventEmitter<ProductDetail>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const prodName =  this.nameInputRef.nativeElement.value;
    const prodQty =  this.qtyInputRef.nativeElement.value;

    const newProductAdded = new ProductDetail(prodName, prodQty);
    this.productAdded.emit(newProductAdded);

  }
}
