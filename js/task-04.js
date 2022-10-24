let counterValue = 0;
const incButton = document.querySelector('[data-action="increment"]');
incButton.addEventListener("click", () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
});
const decButton = document.querySelector('[data-action="decrement"]');
decButton.addEventListener("click", () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
});
console.log(incButton);
