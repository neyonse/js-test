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

// const historyService = {
//     orders: [
//         { email: 'jacob@hotmail.com', dish: 'Burrito' },
//         { email: 'solomon@topmail.net', dish: 'Burger' },
//         { email: 'artemis@coldmail.net', dish: 'Pizza' },
//         { email: 'solomon@topmail.net', dish: 'Apple pie' },
//         { email: 'jacob@hotmail.com', dish: 'Taco' },
//     ],

//     getOrdersLog() {
//         return this.orders
//             .map(order => `email: ${order.email} dish: ${order.dish}`)
//             .join(' - ');
//     },
//     getEmails() {
//         const emails = this.orders.map(order => order.email);
//         const uniqueEmails = new Set(emails);
//         console.log(uniqueEmails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter(order => order.email === email);
//     },
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail('solomon@topmail.net'));
// console.log(historyService.getOrdersByEmail('artemis@coldmail.net'));

//-------------------------------------------------------------------------------------------------------------------

// const objC = {
//     z: 5,
// };

// console.log('objC:', objC);

// const objB = Object.create(objC);
// objB.y = 3;

// console.log('objB:', objB);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objA:', objA);

// console.log('результат виклику objA.z:', objA.z);

// console.log(objA.hasOwnProperty('x'));
// console.log(objA.hasOwnProperty('z'));

//-------------------------------------------------------------------------------------------------------------------

class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} gains ${amount} xp`);
        this.xp += amount;
    }
}

const player0 = new Hero({});
console.log(player0);

const player1 = new Hero({ name: 'player1', xp: 1000 });

console.log(player1);

class Warrior extends Hero {
    // constructor({ name, xp, weapon }) {
    //     super({ name, xp });
    //     this.weapon = weapon;
    // }

    // те ж саме

    constructor({ weapon, ...restProps }) {
        super(restProps);
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} attacks using ${this.weapon}`);
    }
}

const player2 = new Warrior({ name: 'player2', xp: 4400, weapon: 'axe' });

console.log(player2);

player2.attack();

player2.gainXp(1000);

console.log(player2);

// console.log('player2.__proto__:', player2.__proto__);

// console.log(player2.__proto__ === Warrior.prototype);
// console.log(Object.getPrototypeOf(player2) === Warrior.prototype); //те саме, що і в попередній строці, але більш правильний запис
// console.log('Warrior.prototype:', Warrior.prototype);

// console.log(Warrior.prototype.__proto__ === Hero.prototype);
// console.log('Warrior.prototype.__proto__:', Warrior.prototype.__proto__);
// console.log('Hero.prototype:', Hero.prototype);

// console.log(Hero.prototype.__proto__ === Object.prototype);

class Mage extends Hero {
    constructor({ spells = [], ...restProps }) {
        super(restProps);

        this.spells = spells;
    }

    cast(spell) {
        console.log(
            `${this.name} casting spell ${
                this.spells[this.spells.indexOf(spell)]
            }`
        );
    }
}

const player3 = new Mage({
    name: 'player3',
    xp: 3800,
    spells: ['Heal', 'Fire wall', 'Ice spike'],
});

console.log(player3);

player3.cast('Ice spike');
player3.gainXp(500);
console.log(player3);

//-------------------------------------------------------------------------------------------------------------------

class Storage {
    constructor(items = []) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    removeItem(itemToRemove) {
        this.items = this.items.filter(item => item !== itemToRemove);

        // this.items.splice(
        //     this.items.findIndex(item => item === itemToRemove),
        //     1
        // );
        // this.items.splice(this.items.indexOf(itemToRemove), 1);
        // this.items = this.items.reduce((acc, item) => {
        //     if (item !== itemToRemove) {
        //         acc.push(item);
        //     }
        //     return acc;
        // }, []);
    }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//-------------------------------------------------------------------------------------------------------------------

class StringBuilder {
    constructor(initialValue) {
        this.value = initialValue;
    }
    getValue() {
        return this.value;
    }
    padEnd(str) {
        this.value += str;

        // this.value = this.value.concat(str);

        // const strToPush = [str.split('')];

        // this.value = this.value
        //     .split('')
        //     .concat(...strToPush)
        //     .join('');
    }
    padStart(str) {
        this.value = str + this.value;

        // this.value = str.concat(this.value);
    }
    padBoth(str) {
        this.items = this.padStart(str) + this.padEnd(str);
    }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

//-------------------------------------------------------------------------------------------------------------------

function booleanToString(b) {
    // return b.toString(); //won't work if b = null or indefined;
    // return String(b);
    // return b ? 'true' : 'false';
    // return '' + b;
    return `${b}`;
}

console.log(booleanToString(true));

//-------------------------------------------------------------------------------------------------------------------
