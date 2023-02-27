const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {

  const li = document.createElement("li");

  li.textContent = ingredients[i];

  li.classList.add("item");

  ulIngredients.appendChild(li);
}

// 2-й спосіб

// const listCreate = document.querySelector('#ingredients');

// const createItems = function(items) {
//   return items.map((item) => {
//   const li = document.createElement('li');
//   li.classList = 'item';
//   li.textContent = item;
//   return li;
//   });
// };

// const items = createItems(ingredients);
// listCreate.append(...items);
