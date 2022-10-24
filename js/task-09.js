const changeColorBtn = document.querySelector(".change-color");
const backgrColor = document.querySelector("body");
const nameColor = document.querySelector(".color");
changeColorBtn.addEventListener("click", () => {
  backgrColor.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
