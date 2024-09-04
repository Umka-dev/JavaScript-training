//Task:
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//My solution

// var n = 6;
// function createNestedOddArray(length, maxInnerArrLength) {
//   console.log('The whole array length: ', length);
//   console.log('Starting max inner array length: ', maxInnerArrLength);
//   const nestedOddArr = [];
//   let oddNumber = 1;

//   for (let i = 0; i < length; i++) {
//     const innerArray = [];
//     for (let j = 0; j < maxInnerArrLength; j++) {
//       innerArray.push(oddNumber);
//       oddNumber += 2;
//     }
//     nestedOddArr.push(innerArray);
//     maxInnerArrLength++;
//   }

//   return nestedOddArr;
// }

// const myArray = createNestedOddArray(n, 1);
// console.log(`Nested array of odd numbers with ${n} rows:`, myArray);

// function rowSumOddNumbers(myArray, n) {
//   const lastRowIndex = n - 1;
//   console.log(`${n}th array row: `, myArray[lastRowIndex]);
//   const sum = myArray[lastRowIndex].reduce((acc, num) => acc + num, 0);
//   console.log(`Sum of the ${n} array row elements: `, sum);
//   return sum;
// }
// rowSumOddNumbers(myArray, n);

//Second solution
// var n = 6;
// function createNestedOddArray(length) {
//   console.log('Array length: ', length);
//   return Array.from({ length }, (_, i) =>
//     Array.from({ length: i + 1 }, (_, j) => 2 * ((i * (i + 1)) / 2 + j) + 1)
//   );
// }

// const myArray = createNestedOddArray(n, 1);
// console.log(`Nested array of odd numbers with ${n} rows:`, myArray);

// function rowSumOddNumbers(myArray, n) {
//   const lastRowIndex = n - 1;
//   console.log(`${n}th array row: `, myArray[lastRowIndex]);
//   const sum = myArray[lastRowIndex].reduce((acc, num) => acc + num, 0);
//   console.log(`Sum of the ${n} array row elements: `, sum);
//   return sum;
// }
// rowSumOddNumbers(myArray, n);

//The best solution

function rowSumOddNumbers(n) {
  const sum = Math.pow(n, 3); //or sum = n*n*n or sum = n ** 3
  console.log(`Sum of the ${n} array row elements: `, sum);
  return sum;
}
rowSumOddNumbers(42);

//Other solution
// function rowSumOddNumbers(n) {
// 	var first = (n*(n-1)) + 1;
//   var result = 0;
//   for (i = 0; i < n; i++) {
//     result += first;
//     first += 2;
//   }
//   return result;
// }
