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
