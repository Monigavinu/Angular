function removeNonPrintableCharacters(inputString: string): string {
    // Use a regular expression to match non-printable ASCII characters and replace them with an empty string.
    return inputString.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
  }
  
  let inputString = 'Hello\x00World\x1F';
  let finalString = removeNonPrintableCharacters(inputString);
  console.log(finalString);
  