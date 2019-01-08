import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { HomeComponent } from './home/home.component';

const approutes: Routes = [
  {path: 'shopping-list', component: ShoppingListComponent},
  // Lazy loading for the recipe route
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
