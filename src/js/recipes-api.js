// fetch('https://dummyjson.com/recipes')
//   .then(res => res.json())
//   .then(console.log);
import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com/recipes';
export async function getRecipes() {
  const { data } = await axios();
  return data;
}
// fetch('https://dummyjson.com/recipes/1')
//   .then(res => res.json())
//   .then(console.log);
export async function getRecipeById(id) {
  const { data } = await axios(`/${id}`);
  return data;
}
