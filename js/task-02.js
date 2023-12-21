const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredients) => {
  const listElements = document.createElement("li");
  listElements.textContent = ingredients;
  fragment.appendChild(listElements);
});

list.appendChild(fragment);
