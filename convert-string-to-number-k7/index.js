// Task:
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

//My solution
// const stringToNumber = function (str) {
//   numberFromString = Number(str);
//   console.log('Type of input data: ', typeof str);
//   console.log('Type of output data: ', typeof numberFromString);
//   console.log('Number from string: ', numberFromString);
//   return numberFromString;
// };

//Other solution
// const stringToNumber = function (str) {
//   numberFromString = parseInt(str);
//   console.log('Type of input data: ', typeof str);
//   console.log('Type of output data: ', typeof numberFromString);
//   console.log('Number from string: ', numberFromString);
//   return numberFromString;
// };

//Better solution
const stringToNumber = function (str) {
  console.log('Type of input data: ', typeof str);
  console.log('Type of output data: ', typeof +str);
  console.log('Number from string: ', +str);
  return +str;
};

stringToNumber('1234');
