import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Description of Recipe 1', 'http://www.cryingoverspiltmilk.co.nz/wp-content/uploads/2015/03/pixabay/b/recipe_1426460443.png'),
    new Recipe('Recipe 2', 'Description of Recipe 2', 'http://www.cryingoverspiltmilk.co.nz/wp-content/uploads/2015/03/pixabay/b/recipe_1426460443.png'),
    new Recipe('Recipe 3', 'Description of Recipe 3', 'http://www.cryingoverspiltmilk.co.nz/wp-content/uploads/2015/03/pixabay/b/recipe_1426460443.png'),
    new Recipe('Recipe 4', 'Description of Recipe 4', 'http://www.cryingoverspiltmilk.co.nz/wp-content/uploads/2015/03/pixabay/b/recipe_1426460443.png'),
    new Recipe('Recipe 5', 'Description of Recipe 5', 'http://www.cryingoverspiltmilk.co.nz/wp-content/uploads/2015/03/pixabay/b/recipe_1426460443.png')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
