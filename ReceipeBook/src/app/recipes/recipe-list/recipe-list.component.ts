import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 
    'Test Description', 
    'https://media.istockphoto.com/photos/delicious-chickpea-salad-with-cherry-tomato-avocado-and-cucumber-picture-id1376497325?b=1&k=20&m=1376497325&s=170667a&w=0&h=VbnsLSeA1jbj_0IV20dyOSGCyeMxtkbZ3ydJdZ1K_Po='),
    
    new Recipe('A Test recipe', 
    'Test Description', 
    'https://media.istockphoto.com/photos/chinese-food-delicious-pickled-fish-picture-id1305108803?b=1&k=20&m=1305108803&s=170667a&w=0&h=Uk2teiijekv8AUw2zgih_0U3VvV8bK8DWx6mTW7vcqE='),
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
   }

}
