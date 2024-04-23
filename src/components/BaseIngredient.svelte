<script lang="ts">
  import clsx from 'clsx'
  import { type IngredientData } from '$lib/ingredients'
  export let ingredient: IngredientData
  const { name, image } = ingredient
</script>

<div
  class={clsx(
    'flex relative',
    'w-40 h-40',
    'justify-center',
    'rounded-full',
    'border-2 border-black',
    'overflow-hidden',
    'hover:scale-105 ease-in-out',
    'transition-all',
    'shadow-2xl'
  )}
>
  <span
    class="absolute mt-3 bg-white px-3 py-2 rounded-full border border-black"
  >
    {name}
  </span>
  <img class="w-full h-full object-cover" src={image} alt={name} />
</div>
