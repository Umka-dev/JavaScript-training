// Task:
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

//My solution
function booleanToString(booleanValue) {
  let booleanString = booleanValue.toString();
  console.log('Boolean to string: ', booleanString);
  console.log('Data type is: ', typeof booleanString);
  return booleanString;
}

//Other solution
// function booleanToString(booleanValue) {
//   let booleanString = String(booleanValue);
//   console.log('Boolean to string: ', booleanString);
//   console.log('Data type is: ', typeof booleanString);
//   return booleanString;
// }

//Other solution
// function booleanToString(b) {
//   let booleanString = `${b}`;
//   console.log('Boolean to string: ', booleanString);
//   console.log('Data type is: ', typeof booleanString);
//   return booleanString;
// }

//Other solution
// function booleanToString(b) {
//   let booleanString = b + '';
//   console.log('Boolean to string: ', booleanString);
//   console.log('Data type is: ', typeof booleanString);
//   return booleanString;
// }

booleanToString(false);
