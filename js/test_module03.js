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

const apartment = {
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (let key of keys) {
    values.push(apartment[key]);
}

console.log(keys);
console.log(values);

//-------------------------------------------------------------------------------------------------------------------

// Кошик товарів

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         product.quantity = 1;
//     },
//     remove(productName) {},
//     clear() {},
//     countTotalPrice() {},
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// };

// console.table(cart);
// console.table(cart.getItems());

// cart.add({ name: 'apple', price: 30 });
// cart.add({ name: 'pear', price: 80 });
// cart.add({ name: 'lemon', price: 35 });
// cart.add({ name: 'zucchini', price: 115 });

// console.table(cart.getItems());

// cart.remove('lemon');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('apple');
// console.table(cart.getItems());

// cart.decreaseQuantity('pear');
// console.table(cart.getItems());

//-------------------------------------------------------------------------------------------------------------------
