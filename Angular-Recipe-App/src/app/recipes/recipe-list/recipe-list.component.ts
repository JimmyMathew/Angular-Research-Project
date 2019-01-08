import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipesList: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipesList = recipes;
      });
    this.recipesList = this.recipeService.getRecipes();
  }
  onNewRecipe() {
  this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.recipeService.recipesChanged.unsubscribe();
  }
}
