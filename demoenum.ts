//declare enum

enum printMedia{
    Newspaper="NEWSPAPER",
    Newsletter="NEWSLETTER",
    Magazine="MAGAZINE",
    Book="BOOK"
}

//Access enum element
console.log(printMedia.Newsletter.toLowerCase());

//Tuple
var employee: [number,string]=[100,"Moniga"];
console.log(employee); //[100, 'Moniga']
employee[1]=employee[1].concat(" Manager");
console.log(employee); //[100, 'Moniga Manager']

/*
ANONYMOUS FUNCTION

var varName = function(argument){
        //body
}
*/
let printMessage = ()=>console.log("Hello we are learning");
printMessage();

const arrString:string[]=['hello','world']

const converToUpperCase=(arrString:string[])=>{
    return arrString.map(item=> item.toUpperCase());
}

//call function
const arrNewArray:string[]=["apple","orange","banana"]
const upperCaseArray:string[]=converToUpperCase(arrNewArray);
console.log(upperCaseArray);