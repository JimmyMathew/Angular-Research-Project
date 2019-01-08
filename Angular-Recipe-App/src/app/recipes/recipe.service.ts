import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
recipesChanged = new Subject<Recipe[]>();
   private recipesList: Recipe[] = [
        new Recipe('Burgar', 'Delicious fatty burgar', '../assets/burgar.jpg',
        [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]),
        new Recipe('Biriyani', 'Hyderabadi style biriyani', '../assets/biriyani.jpg',
        [new Ingredient('Rice Plate', 1), new Ingredient('Meat', 2)])
      ];
constructor(private slService: ShoppingListService) {}
      getRecipes() {
          return this.recipesList.slice();
      }
      getRecipe(index: number) {
        return this.recipesList[index];
    }
      addIngredientsToShoppingList(ingredient: Ingredient[]) {
        this.slService.addIngredientsFromRecipe(ingredient);
      }
      addRecipe(recipe: Recipe) {
        this.recipesList.push(recipe);
        this.recipesChanged.next(this.recipesList.slice());
      }
      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipesList[index] = newRecipe;
        this.recipesChanged.next(this.recipesList.slice());
      }
      deleteRecipe(index: number) {
        this.recipesList.splice(index, 1);
        this.recipesChanged.next(this.recipesList.slice());
      }
}
