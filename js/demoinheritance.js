"use strict";
//declare a class as parent
class Person {
    //constructor
    constructor(_name) {
        //instance varibales
        this.name = '';
        this.name = _name;
    }
}
//child
class EmployeeOne extends Person {
    //constructor
    constructor(_empCode, name) {
        super(name);
        //instance variable
        this.empCode = 0;
        //concrete method
        this.displayName = () => {
            console.log("Name : " + this.name);
            console.log("Code : " + this.empCode);
        };
        this.empCode = _empCode;
    }
}
//entry point
let emp = new EmployeeOne(101, 'Moniga');
emp.displayName();
