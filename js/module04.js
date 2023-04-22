// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// }

// const deliverPizza = pizzaName => console.log(`Delivering pizza ${pizzaName}.`);

// function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// }

// const eatPizza = pizzaName => console.log(`Eating pizza ${pizzaName}`);

// makePizza('Royal Grand', deliverPizza);

// makePizza('Ultracheese', eatPizza);

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

//-------------------------------------------------------------------------------------------------------------------

const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, callback1, callback2) {
        const { pizzas } = this;

        if (!pizzas.includes(pizzaName)) {
            const error = `There is no pizza with a name ${pizzaName} in the assortment.`;

            callback2(error);
            return;
        }

        callback1(pizzaName);
        return;
    },
};

// Callback for onSuccess
function makePizza(pizzaName) {
    // return `Your order is accepted. Cooking pizza ${pizzaName}.`;
    console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
}

// Callback for onError
function onOrderError(error) {
    // return `Error! ${error}`;
    console.log(`Error! ${error}`);
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

//-------------------------------------------------------------------------------------------------------------------

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths); // [ 5, 4, 5, 7 ]

//-------------------------------------------------------------------------------------------------------------------

// const changeArray = function (arrayToChange) {
//     const arrayNew = [];

//     arrayToChange.forEach(function (el, index) {
//         console.log(`${index}: ${el}`);

//         if (index % 2 === 0) {
//             arrayNew.push(el);
//             return;
//         }
//         arrayNew.push(index);
//     });

//     return arrayNew;
// };

// console.log(changeArray(['Earth', 'Mars', 'Venus', 'Jupiter']));

// console.log(
//     changeArray([
//         'The Last Kingdom',
//         'Beside Still Waters',
//         'The Dream of a Ridiculous Man',
//         'Redder Than Blood',
//         'Enemy of God',
//     ])
// );

//-------------------------------------------------------------------------------------------------------------------

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         genres: ['adventure', 'history'],
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         genres: ['fiction', 'mysticism'],
//     },
//     {
//         title: 'Redder Than Blood',
//         author: 'Tanith Lee',
//         genres: ['horror', 'mysticism', 'adventure'],
//     },
// ];

// const allGenres = books.flatMap(book => book.genres);

// console.log(allGenres);

// const uniqueGenres = allGenres.filter(
//     (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(uniqueGenres);

//-------------------------------------------------------------------------------------------------------------------
const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
        age: 37,
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
        age: 34,
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
        age: 24,
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
        age: 21,
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
        age: 27,
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
        age: 38,
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
        age: 39,
    },
];

const getUsersWithAge = (users, minAge, maxAge) => {
    const inAgeRangeUsers = users.filter(
        user => user.age >= minAge && user.age <= maxAge
    );
    return inAgeRangeUsers;
};

// console.log(getUsersWithAge(users, 25, 35));

const getFriends = users => {
    const allFriends = users.flatMap(user => user.friends);
    console.log(allFriends);
    const uniqueFriends = allFriends.filter(
        (friend, index, array) => array.indexOf(friend) === index
    );

    return uniqueFriends;
};

// console.log(getFriends(users));

const getActiveUsers = users => {
    const ActiveUsers = users.filter(user => user.isActive);
    return ActiveUsers;
};

// console.log(getActiveUsers(users));

const getInactiveUsers = users => {
    const inactiveUsers = users.filter(user => !user.isActive);
    return inactiveUsers;
};

// console.log(getInactiveUsers(users));

const calculateTotalBalance = users => {
    const totalBalance = users.reduce((acc, user) => {
        return (acc += user.balance);
    }, 0);
    return totalBalance;
};

// console.log(calculateTotalBalance(users));

const getTotalFriendCount = users => {
    const totalFriendsCount = users.reduce((acc, user) => {
        return (acc += user.friends.length);
    }, 0);
    return totalFriendsCount;
};

// console.log(getTotalFriendCount(users));

// повертає масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends).

const sortByDescendingFriendCount = users => {
    const byDescendingFriendCount = [...users].sort(
        (user1, user2) => user2.friends.length - user1.friends.length
    );
    return byDescendingFriendCount;
};

// console.log(sortByDescendingFriendCount(users));
// console.log(users);

// повертає масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).

const getNamesSortedByFriendCount = users => {
    const namesSortedByFriendCount = [...users]
        .sort((user1, user2) => user1.friends.length - user2.friends.length)
        .map(user => user.name);
    return namesSortedByFriendCount;
};

console.log(getNamesSortedByFriendCount(users));

// повертає масив унікальних імен друзів (властивість friends), відсортований за алфавітом.

const getSortedFriends = users => {
    const sortedFriends = users
        .flatMap(user => user.friends)
        .filter((friend, index, array) => array.indexOf(friend) === index)
        .sort();
    return sortedFriends;
};

console.log(getSortedFriends(users));

// повертає загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

const getTotalBalanceByGender = (users, gender) => {
    const totalBalanceByGender = users
        .filter(user => user.gender === gender)
        .reduce((totalBalance, user) => {
            totalBalance += user.balance;
            return totalBalance;
        }, 0);

    return totalBalanceByGender;
};

console.log(getTotalBalanceByGender(users, 'male'));
console.log(getTotalBalanceByGender(users, 'female'));

//-------------------------------------------------------------------------------------------------------------------

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, playtime) => (acc += playtime));

// // const totalPlayTime = playtimes.reduce((acc, playtime) => {
// //     return (acc += playtime);
// // }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);
// console.log(averagePlayTime);

//-------------------------------------------------------------------------------------------------------------------

// const players = [
//     { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//     { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//     { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//     { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//     return (acc += player.playtime / player.gamesPlayed);
// }, 0);
// console.log(totalAveragePlaytimePerGame);

// const averagePlaytimePerGame = totalAveragePlaytimePerGame / players.length;
// console.log(averagePlaytimePerGame);

//-------------------------------------------------------------------------------------------------------------------

const books = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        rating: 8.38,
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        rating: 8.51,
    },
    {
        title: 'The Dream of a Ridiculous Man',
        author: 'Fyodor Dostoevsky',
        rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const sortedByAuthorName = [...books].sort((book1, book2) =>
    book1.author.localeCompare(book2.author)
);

const sortedByReversedAuthorName = [...books].sort((book1, book2) =>
    book2.author.localeCompare(book1.author)
);

const sortedByAscendingRating = [...books].sort(
    (book1, book2) => book1.rating - book2.rating
);

const sortedByDescentingRating = [...books].sort(
    (book1, book2) => book2.rating - book1.rating
);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// повертає масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

const MIN_BOOK_RATING = 8;

const names = books
    .filter(book => book.rating > MIN_BOOK_RATING)
    .map(book => book.author)
    .sort((author1, author2) => author1.localeCompare(author2));

// console.log(names);

//-------------------------------------------------------------------------------------------------------------------
