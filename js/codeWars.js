function booleanToString(b) {
    return b.toString(); //won't work if b = null or indefined;
    // return String(b);
    // return b ? 'true' : 'false';
    // return '' + b;
    // return `${b}`;
    // if (b) {
    //     return 'true';
    // }
    // return 'false';
}

// const booleanToString = b => String(b); //elegant solution
// const booleanToString = String; //even more short version of previous

console.log(booleanToString(true));
console.log(typeof booleanToString(true));

//-------------------------------------------------------------------------------------------------------------------

const summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
};

// те саме через цикл while

// const summation = function (num) {
//     let i = 1;
//     let sum = 0;
//     while (i <= num) {
//         sum += i;
//         i++;
//     }
//     return sum;
// };

// і знову ж те саме, але трохи інший запис

// const summation = function (num) {
//     let i = 1,
//         sum = 1;
//     while (i++ < num) {
//         sum += i;
//     }
//     return sum;
// };

// const summation = num =>
//     Array(num)
//         .fill('')
//         .reduce((sum, item, index) => sum + (index + 1), 0);

// const summation = function (num) {
//     let sum = 0;
//     while (num > 0) {
//         sum += num;
//         num--; // num -= 1 || num = num - 1.
//     }
//     return sum;
// };

// const summation = n => (n * (n + 1)) / 2;

// const summation = function f(num) {
//     return num ? num + f(num - 1) : 0;
// };
//Цей код є рекурсивною функцією, яка обчислює суму послідовності чисел від 1 до num.
// У першому рядку функції ми визначаємо функцію з іменем "f" та присвоюємо її змінній "summation". Це зроблено для того, щоб ми могли викликати функцію "f" рекурсивно всередині самої себе.
// Далі, функція "f" приймає параметр "num". Якщо "num" більше 0, функція рекурсивно викликає себе з аргументом "num-1" та додає до результату "num". Це означає, що функція буде викликана рекурсивно, доки "num" не стане рівним 0.
// Якщо "num" дорівнює 0, функція поверне 0, тобто базовий випадок рекурсії.
// Наприклад, якщо ми викликаємо функцію summation(5), функція "f" буде викликана так:
// f(5) = 5 + f(4)
// f(4) = 4 + f(3)
// f(3) = 3 + f(2)
// f(2) = 2 + f(1)
// f(1) = 1 + f(0)
// f(0) = 0
// Таким чином, f(5) поверне 5 + 4 + 3 + 2 + 1 + 0, тобто суму чисел від 1 до 5, яка дорівнює 15.

//те ж саме, але трохи інакше.

// const summation = function (num) {
//     return num > 1 ? num + summation(num - 1) : num;
// };

console.log(summation(4));

//-------------------------------------------------------------------------------------------------------------------

const boolToWord = bool => (bool ? 'Yes' : 'No');

// +bool converts the Boolean to an integer. false = 0, true = 1.
// ['No','Yes'] is a list with "No" being index 0, and "Yes" being index 1.
// works only if we have literally true or false value in the input.

// function boolToWord(bool) {
//     return ['No', 'Yes'][+bool];
// }

console.log(boolToWord(true));

//-------------------------------------------------------------------------------------------------------------------
