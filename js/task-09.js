function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  widgetEl: document.querySelector(".widget"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
  body: document.querySelector(".body"),
};
refs.button.addEventListener("click", onButton);

function onButton(event) {
  refs.span.textContent = getRandomHexColor();
  document.body.style.background = getRandomHexColor();

}



