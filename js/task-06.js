const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  textInput.value.length == textInput.getAttribute("data-length")
    ? textInput.classList.add("valid")
    : textInput.classList.add("invalid");
});
