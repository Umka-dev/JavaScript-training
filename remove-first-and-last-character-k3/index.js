//Task:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

//My solution
function removeChar(str) {
  const partString = str.slice(1, -1);
  console.log(
    'The first and last characters were removed from the original string. Result: ',
    partString
  );
  return partString;
}

//Other solution
// const removeChar = (str) => str.slice(1, -1);

//Other solution
// function removeChar(str) {
//   console.log(`Cut down text: ${str.substring(1, str.length - 1)}`);
//   return str.substring(1, str.length - 1);
// }

removeChar('country');
