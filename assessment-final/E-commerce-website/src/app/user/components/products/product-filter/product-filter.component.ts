import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';



@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories$;

  @Input('category') category;

  constructor(private categoryService: CategoriesService)
   {
    this.categories$ = this.categoryService.getAll()
    
   }

  ngOnInit(): void {
    
  }

  
}
