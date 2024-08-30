//Task:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because square(1)+square(2)+square(2)=9.

//My solution
// function squareSum(numbers) {
//   const sumSquereNumbers = numbers
//     .map((number) => number ** 2)
//     .reduce((acc, number) => acc + number, 0);
//   console.log('Sum of square of the numbers in the array: ', sumSquereNumbers);
//   return sumSquereNumbers;
// }

//Other solution
// function squareSum(numbers) {
//   return console.log(
//     numbers.reduce(function (sum, n) {
//       return n * n + sum;
//     }, 0)
//   );
// }

//Better solution
function squareSum(numbers) {
  const sumSquereNumbers = numbers.reduce((sum, num) => sum + num ** 2, 0);
  console.log('Sum of square of the numbers in the array: ', sumSquereNumbers);
  return sumSquereNumbers;
}

squareSum([0, 3, 4, 5]);
