//Task:
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//My solution
function numberToString(num) {
  const strFromNum = num.toString();
  console.log('Type of input data: ', typeof num);
  console.log('Type of output data: ', typeof strFromNum);
  console.log('String from number: ', strFromNum);
  return strFromNum;
}

numberToString(-123.99);

//Other solution
// function numberToString(num) {
//     return String(num);
//   }

//Other solution
// function numberToString(num) {
//     return ''+num;
//   }

//Other solution
// const numberToString = (num) => `${num}`;
