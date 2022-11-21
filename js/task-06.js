const inputEl = document.querySelector('#validation-input');



inputEl.addEventListener('blur',onCheckSymbolInput)

function onCheckSymbolInput(event) {
    if(event.currentTarget.value.length===Number(inputEl.dataset.length)) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");  
    } else {
    inputEl.classList.remove("valid");    
    inputEl.classList.add("invalid");
  }
}