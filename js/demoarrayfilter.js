"use strict";
//declare array
const arrNumbers = [1, 2, 3, 4, 5, 6];
//arrNumbers.push(10); //10 is showing
//arrNumbers.pop();
//filtering
const arrFilteredNumbers = arrNumbers.filter(x => x % 2 === 0); //dont declare x...x is taking all values from the array
console.log(arrFilteredNumbers);
//print full name
function printFullName(firstName, lastName = "Vinu") {
    console.log(`${firstName}${lastName}`);
}
printFullName("Moniga ");
//Reduce method
/*
calculate the sum of all elements in the array
*/
const addNumbers = (first, second) => first + second; //this is a function which is reduced by using arrow function
const sumOfNumbers = arrNumbers.reduce(addNumbers, 0);
console.log(sumOfNumbers); //21
