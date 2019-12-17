import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe('test recipe', 'this is a test', 'https://images.pitboss-grills.com/catalog/recipes/1200px/Reverse-Seared-NY-Steak.jpg'),
      new Recipe('test recipe', 'this is a test', 'https://images.pitboss-grills.com/catalog/recipes/1200px/Reverse-Seared-NY-Steak.jpg')
    ];
  }

  ngOnInit() {
  }

}
