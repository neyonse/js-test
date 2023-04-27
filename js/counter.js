const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('.js-decrement-btn');
const incrementBtn = document.querySelector('.js-increment-btn');
const valueEl = document.querySelector('.js-counter-value');

decrementBtn.addEventListener('click', function () {
    console.log('Тицьнули на "Зменшити"');

    counter.decrement();
    valueEl.textContent = counter.value;

    console.log('counter value =', counter.value);
});

incrementBtn.addEventListener('click', function () {
    console.log('Тицьнули на "Збільшити"');

    counter.increment();
    valueEl.textContent = counter.value;

    console.log('counter value =', counter.value);
});
