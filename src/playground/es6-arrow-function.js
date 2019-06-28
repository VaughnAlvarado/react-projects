function funcSquare() {
    return x * x;
}

const square = function (x) {
    return x * x;
}

// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x * x;
 
console.log(squareArrow(4));

// Test

const getFirstName = (firstName) => firstName.split(' ')[0];

const getFirstName2 = (firstName) => {
    return firstName.split(' ')[0];
}

console.log(getFirstName('Mike Smith'));

