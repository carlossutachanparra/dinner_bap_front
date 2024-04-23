
<script lang="ts">
    
    import { type RecipeIngredient } from '$lib/recipes'
    import {Ingredient, type IngredientData } from '$lib/ingredients'
  
    
    export let recipeIngredients: RecipeIngredient[];
  
    function getIngredientData(ingredientName: string): IngredientData {
  
      return Ingredient[ingredientName];
    }
  </script>
  
  <div class="recipe-card">
   
    {#each recipeIngredients as { amount,  ingredient } ( ingredient.name)}
      <div class="ingredient">
   
        <span>{amount}</span>
        <span>{ ingredient.name}</span>
        
        <img src={ ingredient.image} alt={ ingredient.name} />
      </div>
    {/each}
  </div>
  
  <style>
    
    .recipe-card {
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 20px;
    }
  
    .ingredient {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }
  
    .ingredient img {
      width: 30px;
      height: 30px;
      margin-left: 10px;
    }
  </style>
  