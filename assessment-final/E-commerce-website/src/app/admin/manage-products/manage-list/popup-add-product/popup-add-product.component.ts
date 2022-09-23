import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popup-add-product',
  templateUrl: './popup-add-product.component.html',
  styleUrls: ['./popup-add-product.component.css']
})
export class PopupAddProductComponent implements OnInit {

  freshnessList = ["Brand New", "Refurbished"]
  actionBtn: string = 'Save'
  productFormTitle: string = 'Add Product Form'


  productForm !: FormGroup;

  singleProduct;
 
  id;

  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<PopupAddProductComponent>) { 

      this.id =  this.route.snapshot.paramMap.get('id');
      if (this.id) this.api.get(this.id).valueChanges().subscribe(p => this.singleProduct = p );
    }



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
      this.productFormTitle = 'Update Product Form'
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
        this.api.create(this.productForm.value)
        this.productForm.reset();
        alert("Product added successfully");
        this.dialogRef.close('save');
  
      }
      }
    else {
      this.updateProduct()
    }
  }


  updateProduct() {
    this.api.update(this.id, this.productForm.value );
            alert("Product updated Successfully");
            this.productForm.reset();
            this.dialogRef.close('update');
  //     .subscribe(
  //       {
  //         next: (res) => {
  //           alert("Product updated Successfully");
  //           this.productForm.reset();
  //           this.dialogRef.close('update');
  //         },
  //         error: (err) => {
  //           alert("Error While updating data");
  //         }
  //       }
  //     )
  }

}


