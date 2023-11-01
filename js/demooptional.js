"use strict";
//OPTIONAL PARAMETERS
function greet(message, name) {
    return message + ' ' + name + ' !';
}
//output
console.log(greet('hello', 'moni'));
console.log(greet('hello')); //error..expected 2 arg but here only one...so give ? to name
console.log(greet('hai', 'bill', 'gates')); //error..expect 1 or 3..but here 3 //print...hai bill!
