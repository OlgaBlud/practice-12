import { refs } from './refs';

export function renderAllRecipes(recipes) {
  const markup = recipes
    .map(
      ({ image, name, id, cuisine, difficulty }) => `
         <li class="recipes-item">
        <img src="${image}" alt="${name}">
        <div>
          <p>${name}</p>
          <p>Cuisine: ${cuisine} </p>
          <p>Difficulty: ${difficulty}</p>
        </div>
      </li>
    `
    )
    .join('');

  refs.recipeList.insertAdjacentHTML('beforeend', markup);
}
