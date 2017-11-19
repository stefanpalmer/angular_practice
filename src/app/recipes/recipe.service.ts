import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Fettuccine Bolognese',
      'Fettuccine with Bolognese sauce',
      'https://img.grouponcdn.com/deal/vtaF3tgw41rKcE9Kc3KZhj/146767840-2048x1229/v1/c700x420.jpg',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Fettuccine', 1),
        new Ingredient('Tomatoes', 3)
      ]),
    new Recipe(
      'Pepperoni Pizza',
      'Pizza with pepperoni topping',
      'http://www.river105.com/wp-content/uploads/2017/08/pizza.jpg',
      [
        new Ingredient('Pepperoni', 20),
        new Ingredient('Pizza crust', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Tomatoes', 4)
      ]),
    new Recipe(
      'Macaroni & Cheese',
      'Macaroni with melted cheddar cheese',
      'http://timeinc.brightcove.com.edgesuite.net/rtmp_uds/429048911/201605/1407/429048911_4920890202001_3918068850001-vs.jpg?pubId=429048911',
      [
        new Ingredient('Macaroni', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Butter', 2)
      ]),
    new Recipe(
      'Fruit Pie',
      'Pie topped with different fruits',
      'https://www.seededatthetable.com/wp-content/uploads/2009/03/dsc_7660.jpg',
      [
        new Ingredient('Pie Crust', 1),
        new Ingredient('Kiwi', 1),
        new Ingredient('Mandarin Oranges', 3),
        new Ingredient('Strawberries', 20),
        new Ingredient('Bananas', 2),
        new Ingredient('Grapes', 30),
        new Ingredient('Filling', 1)
      ]),
  ];

  constructor (private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.transferIngredientsFromRecipe(ingredients);
  }
}
