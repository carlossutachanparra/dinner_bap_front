<script lang="ts">
  import RecipeCard from '../../components/RecipeCard.svelte'
  import { recipes } from '$lib/recipes';
</script>

<style>
  .scrollable-content {
    height: 500px; 
    overflow-y: auto;
  }
  .recipe-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .recipe-name {
    margin-right: 20px;
    font-weight: bold;
    color: white;
  }
  .recipe-image {
    width: 100px; 
    height: auto;
    color: white;
  }
</style>

<div class="scrollable-content">
  {#each recipes as recipe (recipe.name)}
    <div class="recipe-container">
      <div class="recipe-name">{recipe.name}</div>
      <img src={recipe.image} alt={recipe.name} class="recipe-image" /> 
      <RecipeCard recipeIngredients={recipe.ingredients} />
    </div>
  {/each}
</div>


