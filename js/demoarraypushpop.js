"use strict";
//PUSH & POP
const myArray = [1, 2, 3];
console.log(myArray);
myArray.push(4); //push 4 to end of array
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.pop();
console.log(myArray);
//REDUCE
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("sum of numbers : ", sum); //15
//OPTIONAL
function greets(name, greeting) {
    if (greeting) {
        return `${greeting},${name}!`;
    }
    else {
        return `Hello,${name}!`;
    }
}
console.log(greets("ALICE"));
console.log(greets('Bob', 'Hi')); //Hi,Bob!
