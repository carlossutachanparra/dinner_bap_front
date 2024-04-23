import { Ingredient, type IngredientData } from './ingredients'

export interface RecipeIngredient {
  amount: number
  ingredient: IngredientData
}
export interface Recipe {
  ingredients: RecipeIngredient[]
  name: string
}
export const recipes: Recipe[] = [
  {
    ingredients: [
      { amount: 2,  ingredient: Ingredient.RICE },
      { amount: 3,  ingredient: Ingredient.CHICKEN },
      { amount: 3,  ingredient: Ingredient.TOMATO }
    ],
    name: 'Arroz con pollo'
  },
  {
    ingredients: [
      { amount: 5,  ingredient: Ingredient.POTATO },
      { amount: 3,  ingredient: Ingredient.CHICKEN },
      { amount: 3,  ingredient: Ingredient.ONION},
      {amount:2,  ingredient:Ingredient.CHEESE},
      {amount:1,  ingredient:Ingredient.LEMON},
    ],
    name: 'Ensalada de papa y pollo'
  },
  {
    ingredients: [
      { amount: 1,  ingredient: Ingredient.MEAT },
      { amount: 3,  ingredient: Ingredient.LETTUCE },
      { amount: 3,  ingredient: Ingredient.ONION},
      {amount:2,  ingredient:Ingredient.CHEESE},
      {amount:1,  ingredient:Ingredient.LEMON},
    ],
    name: 'Arroz con carne y verduras'
  },
  {
    ingredients: [
      { amount: 10,  ingredient: Ingredient.POTATO },
      { amount: 4,  ingredient: Ingredient.LETTUCE },
      { amount: 1,  ingredient: Ingredient.KETCHUP},
      {amount:2,  ingredient:Ingredient.LEMON},
    ],
    name: 'Tortilla de papa con ensalada de lechuga'
  },
  {
    ingredients: [
      { amount: 10,  ingredient: Ingredient.POTATO },
      { amount: 1,  ingredient: Ingredient.LETTUCE },
      { amount: 1,  ingredient: Ingredient.CHICKEN},
      { amount: 4,  ingredient: Ingredient.CHEESE},
      {amount:2,  ingredient:Ingredient.LEMON},
    ],
    name: 'Pollo a la plancha con salsa de limón y queso'
  },
  {
    ingredients: [
      { amount: 2,  ingredient: Ingredient.POTATO },
      { amount: 1,  ingredient: Ingredient.LETTUCE },
      { amount: 1,  ingredient: Ingredient.MEAT},
      { amount: 5,  ingredient: Ingredient.TOMATO},
      {amount:5,  ingredient:Ingredient.ONION},
    ],
    name: 'carne con tomate y cebolla salteada'
  }

]
