//declare a class as parent

class Person {
    //instance varibales
    name: string = '';

    //constructor
    constructor(_name: string) {
        this.name = _name;
    }
}

//child
class EmployeeOne extends Person {

    //instance variable

    empCode: number = 0;

    //constructor
    constructor(_empCode: number, name: string) {
        super(name);
        this.empCode = _empCode;
    }

    //concrete method

    displayName = (): void => {
        console.log("Name : " + this.name);
        console.log("Code : " + this.empCode);
    }
}

//entry point

let emp = new EmployeeOne(101, 'Moniga');
emp.displayName();