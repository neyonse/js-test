// const user = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: {
//         country: 'Jamaica',
//         city: 'Ocho Rios',
//     },
//     hobbies: ['swiming', 'music', 'sci-fi'],
// };

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

//-------------------------------------------------------------------------------------------------------------------

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 4,
// };

// let totalFeedback = 0;

// const values = Object.values(feedback);

// console.log(values);

// for (const value in values) {
//     console.log(value);
// }

//-------------------------------------------------------------------------------------------------------------------

// const friends = [
//     { name: 'Mango', isOnline: false },
//     { name: 'Kiwi', isOnline: true },
//     { name: 'Poly', isOnline: false },
//     { name: 'Ajax', isOnline: false },
//     { name: 'Nikky', isOnline: true },
// ];

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of allFriends) {
//         console.log(friend);

//         if (friend.isOnline) {
//             friendsByStatus.online.push(friend.name);
//             continue;
//         }

//         friendsByStatus.offline.push(friend.name);
//     }

//     return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

//-------------------------------------------------------------------------------------------------------------------

// const x = {
//     a: 20,
//     b: 15,
//     c: 44,
//     d: 79,
// };

// console.log(Object.keys(x));
// console.log(Object.keys(x).length);

//-------------------------------------------------------------------------------------------------------------------

// Просто тестую різні штуки

// const nameVariable = 'Amelia';
// const age = 22;

// const object01 = {
//     name: nameVariable,
//     surname: 'Doe',
//     age,
// };

// function getValues(object) {
//     const values = [];

//     for (const key in object) {
//         values.push(object[key]);
//     }

//     return values;
// }

// console.log(getValues(object01));

// const object02 = Object.create(object01);
// object02.mail = 'poly@mail.com';
// object02.isOnline = true;
// object02.score = 500;

// function countProps(object) {
//     let propCount = 0;

//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }

//     return propCount;
// }

// console.log(object01.name);

// console.log(countProps(object02));

//-------------------------------------------------------------------------------------------------------------------

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//-------------------------------------------------------------------------------------------------------------------

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (let product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
//     }
//     return null;
// }

// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));

// function getAllPropValues(propName) {
//     const propValues = [];

//     for (let product of products) {
//         if (product.hasOwnProperty(propName)) {
//             propValues.push(product[propName]);
//         }
//     }
//     return propValues;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// function calculateTotalPrice(productName) {
//     let totalPrice = 0;
//     for (let product of products) {
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }
//     }
//     return totalPrice;
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));

//-------------------------------------------------------------------------------------------------------------------

// Кошик товарів

const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (product.name === item.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;

        for (let i = 0; i < items.length; i += 1) {
            const item = items[i];

            if (productName === item.name) {
                console.log('це елемент, який треба видалити:', items[i]);
                console.log('індекс елемента, який треба видалити:', i);

                items.splice(i, 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;
        let total = 0;

        for (const { price, quantity } of items) {
            total += price * quantity;
        }
        return total;
    },
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 30 });
cart.add({ name: 'pear', price: 80 });
cart.add({ name: 'pear', price: 80 });
cart.add({ name: 'lemon', price: 35 });
cart.add({ name: 'zucchini', price: 115 });
cart.add({ name: 'zucchini', price: 115 });
cart.add({ name: 'zucchini', price: 115 });

console.table(cart.getItems());

console.log('total:', cart.countTotalPrice());

cart.remove('lemon');
console.table(cart.getItems());

console.log('total:', cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());

cart.increaseQuantity('apple');
// console.table(cart.getItems());

cart.decreaseQuantity('pear');
// console.table(cart.getItems());

const getProductTotalPrice = function (product) {
    return product.price * product.quantity;
};

console.log(getProductTotalPrice(cart.items[1]));

//-------------------------------------------------------------------------------------------------------------------
