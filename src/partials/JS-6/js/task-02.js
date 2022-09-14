/*
1) Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
2) Додасть назву інгредієнта як його текстовий вміст.
3) Додасть елементу клас item.
4) Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elementUl = document.querySelector('#ingredients');
// let elementLi = document.createElement("li");
// elementLi.classList.add('item');
// for (let key of ingredients) {
//   let elementLi = document.createElement("li");
//   elementLi.classList.add('item');
//   elementUl.append(elementLi);
//   elementLi.textContent = key;  
// }

console.log(elementUl);
const makeIngr = (ingredient) => {
  let elementLi = document.createElement("li");
  elementLi.classList.add('item');
  elementLi.textContent = ingredient;
  // elementLi.style.color = red;
  // elementLi.style.marginBottom = 30;
  return elementLi
}
const elements = ingredients.map(makeIngr);
console.log(elements);
elementUl.append(...elements);


