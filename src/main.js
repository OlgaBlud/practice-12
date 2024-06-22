import { getRecipeById, getRecipes } from './js/recipes-api';
import { renderAllRecipes } from './js/render-functions';

document.addEventListener('DOMContentLoaded', async () => {
  const { recipes } = await getRecipes();

  renderAllRecipes(recipes);
});
