const rangeControl = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

rangeControl.addEventListener("input", () => {
  textOutput.style.fontSize = `${Number(rangeControl.value)}px`;
});
