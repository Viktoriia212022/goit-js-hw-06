const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text')


inputEl.addEventListener('input',onCheckInput)

function onCheckInput() {
   spanEl.style.fontSize = inputEl.value + "px";
}




