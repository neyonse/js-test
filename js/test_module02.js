function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';

    if (password === ADMIN_PASSWORD) {
        return 'Welcome!';
    }
    return 'Access denied, wrong password!';
}

console.log(checkPassword('sfsff'));

//-------------------------------------------------------------------------------------------------------------------

function getExtremeElements(array) {
    // const firstElement = array[0];
    // const lastElement = array[array.length - 1];
    // const newArray = [firstElement, lastElement];

    // return newArray;

    return [array[0], array[array.length - 1]];
}

console.log(
    'new array:',
    getExtremeElements(['apple', 'peach', 'pear', 'banana'])
);

//-------------------------------------------------------------------------------------------------------------------

function splitMessage(message, delimiter) {
    let words;

    words = message.split(delimiter);

    return words;
}

console.log(splitMessage('Mango hurries to the train', ' '));
console.log(splitMessage('Mango', ''));
console.log(splitMessage('best_for_week', '_'));

//-------------------------------------------------------------------------------------------------------------------

function calculateEngravingPrice(message, pricePerWord) {
    // const messageToArray = message.split(' ');
    // const messageLength = messageToArray.length;
    // const price = messageLength * pricePerWord;

    // return price;

    return message.split(' ').length * pricePerWord;
}

console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
console.log(calculateEngravingPrice('Web-development is creative work', 40));
console.log(calculateEngravingPrice('Web-development is creative work', 20));

//-------------------------------------------------------------------------------------------------------------------

function slugify(title) {
    return title.split(' ').join('-').toLowerCase();
}

console.log(slugify('Arrays for begginers'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

//-------------------------------------------------------------------------------------------------------------------

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
console.log('arrayToSlice:', fruits);

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);
const firstAndLast = fruits.slice(0, 1).concat(fruits.slice(-1));

console.log('firstTwoEls:', firstTwoEls);
console.log('nonExtremeEls:', nonExtremeEls);
console.log('lastThreeEls:', lastThreeEls);
console.log('firstAndLast:', firstAndLast);

//-------------------------------------------------------------------------------------------------------------------

function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);

    if (newArray.length > maxLength) {
        console.log('cutted:');
        return newArray.slice(0, maxLength);
    }

    console.log('not cutted:');
    return newArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 4));
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

//-------------------------------------------------------------------------------------------------------------------

function calculateTotal(number) {
    let sum = 0;
    for (let i = 1; i <= number; i += 1) {
        sum += i;
    }
    return sum;
}

console.log(calculateTotal(3));
console.log(calculateTotal(18));
console.log(calculateTotal(24));

//-------------------------------------------------------------------------------------------------------------------

const fruits02 = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits02.length; i += 1) {
    const fruit = fruits02[i];
    console.log(fruit);
}

//-------------------------------------------------------------------------------------------------------------------

function calculateTotalPrice(order) {
    let total = 0;
    for (let element of order) {
        console.log(element);
        total += element;
    }
    return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));

//-------------------------------------------------------------------------------------------------------------------

function findLongestWord(string) {
    let theLongestWord = string[0];
    const arrayToCheck = string.split(' ');

    for (let element of arrayToCheck) {
        if (element.length > theLongestWord.length) {
            theLongestWord = element;
        }
    }

    return theLongestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));

//-------------------------------------------------------------------------------------------------------------------

function createArrayOfNumbers(min, max) {
    const numbers = [];

    for (let i = min; i <= max; i += 1) {
        numbers.push(i);
    }

    return numbers;
}

console.log(createArrayOfNumbers(14, 17));

//-------------------------------------------------------------------------------------------------------------------

function filterArray(numbers, value) {
    const newArray = [];

    for (let number of numbers) {
        if (number > value) {
            newArray.push(number);
        }
    }

    return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));

//-------------------------------------------------------------------------------------------------------------------

function getCommonElements(array1, array2) {
    const commonElementsArray = [];

    // for (let i = 0; i < array1.length; i++) {
    //     if (array2.includes(array1[i])) {
    //       commonElementsArray.push(array1[i]);
    //     }
    //   }

    for (const element of array1) {
        if (array2.includes(element)) {
            commonElementsArray.push(element);
        }
    }

    return commonElementsArray;
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//-------------------------------------------------------------------------------------------------------------------

function getEvenNumbers(start, end) {
    const evenNumbersArray = [];

    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            evenNumbersArray.push(i);
        }
    }

    return evenNumbersArray;
}

console.log(getEvenNumbers(3, 11));

//-------------------------------------------------------------------------------------------------------------------

function includes(array, value) {
    // let answer;
    // return (answer = array.includes(value) ? true : false);
    for (let element of array) {
        if (element === value) {
            return true;
        }
    }
    return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(
    includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
);

//-------------------------------------------------------------------------------------------------------------------
