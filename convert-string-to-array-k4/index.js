//Task:
//Write a function to split a string and convert it into an array of words.
//Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//My solution
// function stringToArray(str) {
//   const strArray = str.split(' ');
//   console.log('String array: ', strArray);
//   console.log('Data type is: ', typeof strArray);
//   console.log('Is array: ', Array.isArray(strArray));
//   return strArray;
// }

// stringToArray('I love arrays they are   my        favorite');

//Other solution
// stringToArray=(s)=>s.split(' ')

//Other solution
// stringToArray = function (str) {
//   return str.trim().split(' ');
// };
// console.log(stringToArray('  I am learning JavaScript right now  '));

//Better solution
stringToArray = (str) => {
  const strArray = str
    .trim() //delete the first and last spaces
    .replace(/[!,_-]/g, '') //replace (!,_-) symbols to ("") globally
    .split(/\s+/g); // supports multiple spaces and tabs
  console.log('String array: ', strArray);
  console.log('Data type is: ', typeof strArray);
  console.log('Is array: ', Array.isArray(strArray));
};
stringToArray(' I love arrays, they are   - my        _favorite!  ');
