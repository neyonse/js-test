// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this:', this);
//     };

//     // changeColor();

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;
//     // console.log(sweater);

//     // sweater.updateColor();

//     // console.log(sweater.updateColor);
//     return sweater.updateColor;
// };

// // makeChangeColor();

// const swapColor = makeChangeColor();

// console.log(swapColor);
// swapColor();

//-------------------------------------------------------------------------------------------------------------------

// такий варіант не працюватиме, this буде undefined, бо коли ми передаємо методи об'єкта як колбек-функції, контекст не зберігається.

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('this of increment before value increases:', this);
//         this.value += value;
//         console.log('new value:', this.value);
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment);

// такий варіант працюватиме за рахунок привє'язки до контексту об'єкта counter за допомогою методу bind.

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('this of increment before value increases:', this);
//         this.value += value;
//         console.log('new value:', this.value);
//     },
// };

// const updateCounter = function (value, operation) {
//     operation.bind(counter)(value);
// };

// updateCounter(10, counter.increment);

// такий варіант працюватиме за рахунок використання стрілочних функцій для методів increment та decrement, які не мають свого контексту this та беруть його з зовнішньої області видимості, що дозволяє їм використовувати контекст об'єкта counter.

// const counter = {
//     value: 0,
//     increment: value => {
//         console.log('this of increment before value increases:', counter);
//         counter.value += value;
//         console.log('new value:', counter.value);
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment);

//-------------------------------------------------------------------------------------------------------------------
