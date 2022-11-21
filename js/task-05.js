const inputEl = document.querySelector('#name-input');
console.log(inputEl);


const nameLable = document.querySelector('#name-output')
console.log(nameLable);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    nameLable.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        return nameLable.textContent ='Anonymous'
    };
};

