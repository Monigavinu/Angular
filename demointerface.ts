//define interface
interface IEmployee{
    //declare variables
    empCode:number;
    empName:string;

    //abstract method (method without implementation)
    getSalary:(empCode:number)=>number;
}

    //implement
    class EmployeeTwo implements IEmployee{
        //variable
        empCode: number;
        empName: string;

        constructor(_empCode:number,_empName : string){
            this.empCode=_empCode;
            this.empName=_empName;
        }

        //method
        getSalary (empCode: number):number{
            return 45000;
        }
    }

//entry point
let empTwo = new EmployeeTwo(101,"Moniga");
console.log(empTwo.getSalary(101));