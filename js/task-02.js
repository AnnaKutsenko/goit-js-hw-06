const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
console.log(ulEl);

const elements = ingredients.map(ingredient => {
  const itemEL = document.createElement('li');
  itemEL.textContent = ingredient;
  itemEL.classList.add('item');

  return itemEL;
})

ulEl.append(...elements)
console.log(elements)