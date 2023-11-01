"use strict";
//PRINT VALUES
for (let i = 1; i <= 5; i++) {
    //special inbuilt function setTimeout
    //In order to delay a task by milliseconds
    setTimeout(function () {
        console.log(i);
    }, 3000);
    let firstNumber = 100;
    let secondNumber = 200;
    //let secondNumber=100;
    //Equality
    //it check only the values of operands
    console.log(firstNumber == secondNumber); //false....if 2nd number 100..then true
    //Identity
    //check the type as well as values
    console.log(firstNumber === secondNumber);
}
