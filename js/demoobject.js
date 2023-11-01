"use strict";
//TYPEOF
let bike = {
    make: 'Honda',
    model: 'CBR',
    year: '2021',
    price: '2lakhs'
};
console.log(typeof (bike)); //object
console.log('price' in bike); //true
console.log('color' in bike); //false
