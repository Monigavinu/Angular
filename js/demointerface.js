"use strict";
//implement
class EmployeeTwo {
    constructor(_empCode, _empName) {
        this.empCode = _empCode;
        this.empName = _empName;
    }
    //method
    getSalary(empCode) {
        return 45000;
    }
}
//entry point
let empTwo = new EmployeeTwo(101, "Moniga");
console.log(empTwo.getSalary(101));
