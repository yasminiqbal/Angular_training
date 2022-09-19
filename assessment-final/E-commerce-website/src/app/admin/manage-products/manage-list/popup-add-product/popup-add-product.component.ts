import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-add-product',
  templateUrl: './popup-add-product.component.html',
  styleUrls: ['./popup-add-product.component.css']
})
export class PopupAddProductComponent implements OnInit {

  freshnessList = ["Brand New", "Refurbished"]
  actionBtn: string = 'Save'


  productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<PopupAddProductComponent>) { }



  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      Comment: ['', Validators.required],
      // date: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      imgPath: ['', Validators.required],
      

    });
    if (this.editData) {
      this.actionBtn = 'Update'
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['Comment'].setValue(this.editData.Comment);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['imgPath'].setValue(this.editData.imgPath);
      
    }

  }
  onAddProuct() {
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postProduct(this.productForm.value).subscribe(
          {
            next: (responsedata) => {
              this.productForm.reset();
              alert("Product added successfully");
              this.dialogRef.close('save');
            },
            error: (err) => {
              alert("Error While saving data")
            }
          }
        );
      }
    }
    else {
      this.updateProduct()
    }
  }


  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData.id)
      .subscribe(
        {
          next: (res) => {
            alert("Product updated Successfully");
            this.productForm.reset();
            this.dialogRef.close('update');
          },
          error: (err) => {
            alert("Error While updating data");
          }
        }
      )
  }


}


