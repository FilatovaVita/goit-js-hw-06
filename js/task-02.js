const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("ul#ingredients");
const listItem = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");
list.insertAdjacentHTML("beforeend", listItem);
