const catItemsLength = document.querySelectorAll(".item");
console.log(`Number of categories:`, catItemsLength.length);

for (let i = 0; i < catItemsLength.length; i += 1) {
  console.log(`Category:`, catItemsLength[i].firstElementChild.textContent);
  console.log(`Elements:`, catItemsLength[i].querySelectorAll("li").length);
}
