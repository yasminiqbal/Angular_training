import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-add-product',
  templateUrl: './popup-add-product.component.html',
  styleUrls: ['./popup-add-product.component.css']
})
export class PopupAddProductComponent implements OnInit {

  freshnessList = ["Brand New", "Refurbished"]
  productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<PopupAddProductComponent>) { }

  

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      productName : ['', Validators.required],
      category : ['', Validators.required],
      // date: ['', Validators.required],
      freshness : ['', Validators.required],
      price : ['', Validators.required],
      Comment: ['', Validators.required],
      imgPath: ['', Validators.required]
    })
  }

  onAddProuct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value).subscribe({
        next:(res)=> {
          // console.log(res);
          alert("Product added successfully");
          this.productForm.reset();
          this.dialogRef.close('save');
          
        },
        // error:()=> {
        //   alert("Error While Adding the product")
        // }
      });
    }
  }

}
