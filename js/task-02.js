const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newEl = document.querySelector('#ingredients')


const elements = ingredients.map(ingredient => {
const liEl = document.createElement('li')
  console.log(liEl)
  liEl.textContent = ingredient
  liEl.classList.add('item')
return liEl
})

newEl.append(...elements)