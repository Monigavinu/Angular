"use strict";
//declare variables
class Employee {
    //constructor
    constructor(code, name) {
        //instance variables
        this.empCode = 0;
        this.empName = '';
        // function display(): string {
        //     return console.log(this.empName + this.empCode);
        // }
        //using arrow function
        this.display = () => console.log(this.empName + " " + this.empCode);
        this.empCode = code;
        this.empName = name;
    }
}
//entry point
let employeeOne = new Employee(1001, "Moniga");
employeeOne.display();
