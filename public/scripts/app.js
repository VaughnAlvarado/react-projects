'use strict';

function funcSquare() {
    return x * x;
}

var square = function square(x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// }

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(4));

// Test

var getFirstName = function getFirstName(firstName) {
    return firstName.split(' ')[0];
};

var getFirstName2 = function getFirstName2(firstName) {
    return firstName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));
