"use strict";
//FUNCTION
function greetPerson(name) {
    if (name === 'Moniga') {
        var greet = "Hello " + name;
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
}
//calling function ENTRY POINT
greetPerson("Varsha"); //hai there (else part is executed)
greetPerson("Moniga"); //hello moniga
//greetPerson(123); //hai there
