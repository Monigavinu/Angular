"use strict";
//TASK
//create a class student with fields name,rollno,mark,grade
//create a graderTracker method to assign grade
//if mark less than 60 then C, >61 & <70 : B, >71 & <90: A,>91 A+ gradw=e
//display method to display all records
//pass only name,rollno,mark in constructor
//use arrow function to compute the task
class Student {
    //constructor
    constructor(name, rollno, mark) {
        //instance variables
        this.Studname = '';
        this.Studrollno = 0;
        this.Studmark = 0;
        this.Studgrade = '';
        this.gradeTracker = (mark) => {
            if (mark < 60) {
                return 'C';
            }
            else if (mark >= 60 && mark < 70) {
                return 'B';
            }
            else if (mark >= 70 && mark < 90) {
                return 'A';
            }
            else if (mark >= 90) {
                return 'A+';
            }
            return 'Invalid';
        };
        this.display = () => console.log(this.Studname + " " + this.Studrollno + " " + this.Studmark + " " + this.Studgrade);
        this.Studname = name;
        this.Studrollno = rollno;
        this.Studmark = mark;
    }
}
//entry point
let StudentOne = new Student("Moniga", 26, 91);
employeeOne.display();
