

const counterValue = {
    value: 0,
    increment(value) {
        this.value += 1;
    },
    decrement(value) {
        this.value -= 1;
    },
};
console.log(counterValue)


const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value')


decrementEl.addEventListener('click', function () {
    console.log('Декремент')
    counterValue.decrement();
    console.log(counterValue)
    valueEl.textContent = counterValue.value;
})

incrementEl.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
})






