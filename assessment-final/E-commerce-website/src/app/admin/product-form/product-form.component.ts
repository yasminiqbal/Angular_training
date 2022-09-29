import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories$;
  product:any = {};
  id:any;
  actionBtn: string = 'Save'


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoriesService, 
    private productService: ProductService 
    )
     { 
      this.categories$ = categoryService.getAll();

      this.id = this.route.snapshot.paramMap.get('id')
      // console.log(this.id)
      
      if (this.id) 
      { 
        this.actionBtn = 'Update'
        this.productService.get(this.id).pipe(take(1)).subscribe(p => this.product = p);}
      // console.log(this.product)
  }

  save(product){
      if (this.id) {
        this.productService.update(this.id, product);
      }
      else {
        this.productService.create(product);}
      
      this.router.navigate(['/admin/products']);
    
  }

  delete(){
    if (!confirm("Are you sure you want to delete this product?")) return;
      
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
    
  }

}
