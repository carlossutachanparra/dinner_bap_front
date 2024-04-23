<script lang="ts">
  import BaseIngredient from './BaseIngredient.svelte'
  import { type IngredientData } from '$lib/ingredients'
  export let ingredient: IngredientData

  let contador = 0
</script>

<div class="flex flex-col">
  <BaseIngredient {ingredient} />
  <button on:click={() => contador++}> aumentar </button>
  <button
    on:click={() => {
      if (contador > 0) {
        contador--
      }
    }}
  >
    disminuir
  </button>
  <span>Contador: {contador}</span>
</div>
