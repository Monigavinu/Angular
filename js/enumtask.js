"use strict";
//task
//write an arrow function that takes an array of numbers as a parameter and returns a new array with each element multiplied by 2
//hint: map()
const arrNumber = (numbers) => {
    return numbers.map((num) => num * 2); //use map method for multiply each element by 2
};
const arrActual = [1, 2, 3, 4, 5]; //actual array
const arrMultiplied = arrNumber(arrActual); //new array after doubling
console.log("actual array", arrActual);
console.log("new array", arrMultiplied);
