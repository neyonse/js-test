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
