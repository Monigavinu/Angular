"use strict";
//declare enum
var printMedia;
(function (printMedia) {
    printMedia["Newspaper"] = "NEWSPAPER";
    printMedia["Newsletter"] = "NEWSLETTER";
    printMedia["Magazine"] = "MAGAZINE";
    printMedia["Book"] = "BOOK";
})(printMedia || (printMedia = {}));
//Access enum element
console.log(printMedia.Newsletter.toLowerCase());
//Tuple
var employee = [100, "Moniga"];
console.log(employee); //[100, 'Moniga']
employee[1] = employee[1].concat(" Manager");
console.log(employee); //[100, 'Moniga Manager']
/*
ANONYMOUS FUNCTION

var varName = function(argument){
        //body
}
*/
let printMessage = () => console.log("Hello we are learning");
printMessage();
const arrString = ['hello', 'world'];
const converToUpperCase = (arrString) => {
    return arrString.map(item => item.toUpperCase());
};
//call function
const arrNewArray = ["apple", "orange", "banana"];
const upperCaseArray = converToUpperCase(arrNewArray);
console.log(upperCaseArray);
