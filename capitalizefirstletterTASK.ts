//To capitalize the first letter of a string 
//eg: moniga --- Moniga

function capitalizeFirstLetter(stringValue: string): string {
    
    //take the first letter of string and then converts it to uppercase using the method
    let firstLetter = stringValue[0].toUpperCase();

    //obtain the remaining portion of the string after the first character
    let balanceLetter = stringValue.slice(1);
    return firstLetter + balanceLetter;
  }
  
  let stringValue = "moniga";
  //call the capitalizeFirstLetter function with stringValue as an argument and store the result in the capitalizedString variable
  let capitalizedString = capitalizeFirstLetter(stringValue);
  console.log("Input String Value : ",stringValue)
  console.log("Capitalized String Value : ",capitalizedString);
  