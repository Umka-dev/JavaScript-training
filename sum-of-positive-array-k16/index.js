//Task:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//My solution
function positiveSum(arr) {
  const sumNumbers = arr
    .filter((number) => number > 0)
    .reduce((accumulator, number) => accumulator + number, 0);
  console.log('Sum of positive numbers in the array: ', sumNumbers);
  return sumNumbers;
}

positiveSum([-1, -2, 2, 0]);

//Other solution
// function positiveSum(arr) {
//   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

//Other solution
// const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

//Other solution
// function positiveSum(arr) {
//   var total = 0;
//   for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//     if (arr[i] > 0) {                   // if arr[i] is greater than zero
//       total += arr[i];                  // add arr[i] to total
//     }
//   }
//   return total;                         // return total
// }
