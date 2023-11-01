///task
//print odd numbers

//declare array

const arrNumberList: number[] = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//filtering
const arrFilteredNumb = arrNumberList.filter(x => x % 2 !== 0);
console.log(arrFilteredNumb);
