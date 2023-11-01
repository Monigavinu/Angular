"use strict";
//ARRAY
let fruits = ['Apple', 'Orange', 'Banana'];
console.log(fruits);
console.log(fruits[1]); //orange
//Multi-TYPE ARRAY
let fruitDemo = ['Apple', 100, 'Orange', 200, 'Banana', 300];
for (var fruit in fruitDemo) {
    console.log(fruitDemo[fruit]);
}
//SORT ARRAY
var sortedArray = fruits.sort();
console.log(sortedArray);
//DESCENDING --- =>
var sortedArrayInDesc = fruits.sort((first, second) => {
    if (first > second) {
        return -1; //descneding...1 asc
    }
    if (first < second) {
        return 1;
    }
    return 0;
});
console.log(sortedArrayInDesc, "Sorted");
