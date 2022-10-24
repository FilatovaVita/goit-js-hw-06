const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destBtn = document.querySelector("[data-destroy]");
const listBox = document.querySelector("#boxes");

let numberTotal = 0;
inputNumber.addEventListener("input", (event) => {
  numberTotal = event.currentTarget.value;
});
createBtn.addEventListener("click", createBox);
function createBox(amount) {
  amount = numberTotal;
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + (i - 1) * 10}px`;
    box.style.height = `${30 + (i - 1) * 10}px`;
    listBox.append(box);
  }
}
destBtn.addEventListener("click", () => {
  listBox.querySelectorAll("div").forEach((element) => element.remove());
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
