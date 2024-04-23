<!-- kitchen/+page.svelte -->

<script lang="ts">
  // Importa el componente Recipecard
  import RecipeCard from '../../components/RecipeCard.svelte'

  // Importa los datos de las recetas (recipes)
  import { recipes, type Recipe } from '$lib/recipes';

  // Utiliza el método map para convertir recipes en recipeIngredients
  export let recipeIngredients = recipes.map((recipe: Recipe) => {
    // Mapea cada ingrediente de la receta para crear un nuevo objeto RecipeIngredient
    let ingredients = recipe.ingredients.map(recipeIngredient => ({
      amount: recipeIngredient.amount,
      ingredient: recipeIngredient.ingredient
    }));

    // Devuelve un nuevo objeto RecipeIngredient con los datos de la receta
    return {
      ingredients: ingredients,
      name: recipe.name
    };
  });
</script>

<div>
  <!-- Renderiza el componente Recipecard y pasa los datos de las recetas -->
  <RecipeCard {recipeIngredients} />
</div>
