"use strict";
//var demo - Global scope
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log("X " + x); //10
    //can access the variable outside the function
}
//let demo -  block scope
function exampleLet() {
    if (true) {
        let y = 10;
    }
    //console.log("Y "+y); //error
}
