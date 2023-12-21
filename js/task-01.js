const categoriesList = document.getElementById("categories");

const categoriesCount = categoriesList.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoriesCount}\n`);

const categoryItems = categoriesList.querySelectorAll("li.item");
categoryItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElementsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}\n`);
});
