<script lang="ts">
  import { Ingredient, ingredientData } from '$lib/ingredients'
  import InventoryIngredient from '../../components/InventoryIngredient.svelte'
</script>

<div>
  <span class="flex gap-4 text-white items-center hover:underline">
    <a
      href="/kitchen"
      class="flex w-[45px] h-[45px] rounded-full border-2 border-white justify-center items-center hover:scale-105 ease-in-out transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
        version="1.1"
      >
        <g id="surface1">
          <path
            style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
            d="M 20.625 7.523438 L 18.734375 5.625 L 9.375 15 L 18.734375 24.375 L 20.625 22.476562 L 13.164062 15 Z M 20.625 7.523438 "
          />
        </g>
      </svg>
    </a>
    Ir a la cocina
  </span>

  <h1 class="w-full text-center">Inventario</h1>
  <div class="flex w-full flex-wrap gap-6 justify-center items-center">
    {#each ingredientData as ingredient}
      <InventoryIngredient {ingredient} />
    {/each}
  </div>
</div>
