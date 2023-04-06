function getShippingCost(country) {
    let message;
    switch (country) {
        case 'China':
            message = `Shipping to ${country} will cost 100 credits`;
            break;
        case 'Chile':
            message = `Shipping to ${country} will cost 250 credits`;
            break;
        case 'Australia':
            message = `Shipping to ${country} will cost 170 credits`;
            break;
        case 'Jamaica':
            message = `Shipping to ${country} will cost 120 credits`;
            break;
        default:
            message = 'Sorry, there is no delivery to your country';
    }
    // return message;
    console.log(message);
}
getShippingCost('China');
getShippingCost('Chile');
getShippingCost('Australia');
getShippingCost('Jamaica');
getShippingCost('Ukraine');

function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; // Change this line

    // return message;
    console.log(message);
}

getNameLength('Anastasiia');

const courseTopic = 'JavaScript essentials';

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

console.log('length:', courseTopicLength);
console.log('first letter:', firstElement);
console.log('last letter:', lastElement);

function getSubstring(string, length) {
    const substring = string.slice(0, length) + 'nas'; // Change this line

    // return substring;
    console.log(substring);
}
getSubstring('Anastasiia', 3);

function formatMessage(message, maxLength) {
    let result;
    result =
        message.length <= maxLength
            ? message
            : message.slice(0, maxLength) + '...';
    // return result;
    console.log(result);
}
formatMessage('Anastasiia Vedmid', 10);

function checkForSpam(message) {
    let result;
    if (
        message.toLowerCase().includes('spam') ||
        message.toLowerCase().includes('sale')
    ) {
        result = true;
    } else {
        result = false;
    }
    // return result;
    console.log(result);
}

checkForSpam('Latest technology news');
checkForSpam('JavaScript weekly newsletter');
checkForSpam('Get best sale offers now!');
checkForSpam('Amazing SalE, only tonight!');
checkForSpam('Trust me, this is not a spam message');
checkForSpam('Get rid of sPaM emails. Our book in on sale!');
checkForSpam('[SPAM] How to earn fast money?');

const minSalary = 500;
const maxSalary = 5000;
const employees = 3;
let totalSalary01 = 0;
let totalSalary02 = 0;

for (let i = 1; i <= employees; i += 1) {
    const random = Math.random();
    const salary01 = Math.round(random * (maxSalary - minSalary) + minSalary);
    const salary02 =
        Math.floor(random * (maxSalary - minSalary + 1)) + minSalary;

    totalSalary01 += salary01;
    totalSalary02 += salary02;
    console.log('random:', random);
    console.log(`ЗП01 працівника номер ${i} = ${salary01}`);
    console.log(`ЗП02 працівника номер ${i} = ${salary02}`);
}
console.log('total salary:', totalSalary01);
console.log('total salary:', totalSalary02);

const add = function add(x, y) {
    console.log(`x = ${x}, y = ${y}`);
    console.log('typeof x: ', typeof x);
    console.log('typeof y: ', typeof y);
    let a;
    console.log('x + y = ', (a = x + y));
    console.log('typeof a: ', typeof a);
    return a.toString().length;
};
console.log('function add result: ', add('10', 20));
console.log('function add result: ', add('name', 'surname'));
