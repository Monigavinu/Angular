"use strict";
//convert a specified number to an array of digits
//eg: 7895 arr[0]=7 arr[1]=8.....
function numberToArray(number) {
    //convert the number to a string and store it inside a variable
    let numberToString = number.toString();
    //converting the number string to an array of digits
    let stringArray = numberToString.split('').map(Number);
    return stringArray;
    console.log(stringArray);
}
//define a variable to store the number we want to convert to
let number = 7895;
let stringArray = numberToArray(number);
console.log(stringArray);
console.log("arr[0] : ", stringArray[0]);
console.log("arr[1] : ", stringArray[1]);
console.log("arr[2] : ", stringArray[2]);
console.log("arr[3] : ", stringArray[3]);
