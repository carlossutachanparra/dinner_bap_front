import tomato from '../../src/images/tomato.jpg'
import rice from '../../src/images/rice.jpg'
import potato from '../../src/images/potato.webp'
import onion from '../../src/images/onion.jpg'
import meat from '../../src/images/meat.jpg'
import lettuce from '../../src/images/lettuce.jpg'
import lemon from '../../src/images/lemon.jpg'
import ketchup from '../../src/images/ketchup.jpg'
import chicken from '../../src/images/chicken.jpg'
import cheese from '../../src/images/cheese.jpg'

export interface IngredientData {
  name: string
  image: string
}

export const Ingredient: { [key: string]: IngredientData } = {
  TOMATO: {
    name: 'Tomate',
    image: tomato
  },
  RICE: {
    name: 'Arroz',
    image: rice
  },
  POTATO: {
    name: 'Papa',
    image: potato
  },
  ONION: {
    name: 'Cebolla',
    image: onion
  },
  MEAT: {
    name: 'Carne',
    image: meat
  },
  LETTUCE: {
    name: 'Lechuga',
    image: lettuce
  },
  LEMON: {
    name: 'Limón',
    image: lemon
  },
  KETCHUP: {
    name: 'Ketchup',
    image: ketchup
  },
  CHICKEN: {
    name: 'Pollo',
    image: chicken
  },
  CHEESE: {
    name: 'Queso',
    image: cheese
  }
}

export const ingredientData = Object.values(Ingredient)
