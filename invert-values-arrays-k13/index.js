//Task:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// You can assume that all values are integers. Do not mutate the input array.

//My solution
// function invert(array) {
//   const invArray = array.map((n) => 0 - n);
//   console.log('Invetred array: ', invArray);
//   return invArray;
// }

//Other solution
function invert(array) {
  const invArray = array.map((num) => -num);
  console.log('Invetred array: ', invArray);
  return invArray;
}

//Other solution
// function invert(array) {
//   const invArray = array.map((x) => (x === 0 ? x : -x));
//   console.log('Invetred array: ', invArray);
//   return invArray;
// }

//Other solution
// function invert(array) {
//     return array.map(e=> e*-1);
//  }

//Other solution
// function invert(array) {
//     return array.map(n => n && -n)
//  }

invert([1, 2, 3, 4, 5]);
// invert([1, -2, 3, -4, 5]);
// invert([0]);
