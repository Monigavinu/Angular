
//TASK
//write a function that takes array of numbers and returns sum of all the elements

let arrNum = [7, 2, 8, 4, 5];   //declaring array
  let sumRes = sumofNumbers(arrNum);
  console.log("Sum of the numbers=", sumRes); //printing the sum

function sumofNumbers(num:any) {   
    let sum = 0;
    for (let i = 0; i<=4; i++) {
        sum =sum+arrNum[i];
      }
      return sum;
  }