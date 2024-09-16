//Task:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

// However, the arrays can have varying lengths, not just limited to 4.

//My solution
// const binaryArrayToNumber = (arr) => {
//   arr = [1, 1, 1, 1];

//   function changeElement(x, index, array) {
//     const n = array.length - 1 - index;
//     const newX = x * 2 ** n;
//     console.log('x:', x, 'n:', n, 'newX:', newX);
//     return newX;
//   }

//   const newArr = arr.map(changeElement);
//   const num = newArr.reduce((a, b) => a + b, 0);
//   console.log('New array: ', newArr);
//   console.log('Number: ', num);
//   return num;
// };

// binaryArrayToNumber();

//Better solution

const binaryArrayToNumber = (arr) => {
  arr = [1, 1, 1, 1];
  const num = parseInt(arr.join(''), 2); //or parseInt(Number(arr.join('')), 2)
  console.log('Integer number from the binary array: ', num);
};
binaryArrayToNumber();

//Other solution
// function binaryArrayToNumber(arr) {
//   return arr.reduce( (a, b) => a << 1 | b );
// }
