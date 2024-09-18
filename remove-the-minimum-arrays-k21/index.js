// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task:
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//My solution
// function removeSmallest(numbers) {
//   console.log('Original array: ', numbers);
//   const smallest = Math.min(...numbers);

//   indexOfFirstSmallest = numbers.findIndex((e) => e === smallest);
//   console.log(
//     'Index of the first smallest number in original array is: ',
//     indexOfFirstSmallest
//   );

//   numbers.splice(indexOfFirstSmallest, 1);
//   console.log('Array filtered from the first smallest number: ', numbers);
//   return numbers;
// }

// removeSmallest([2, 2, 1, 2, 1]);

//Other solution
// function removeFirstSmallest(numbers) {
//   //Find index of the first smallest number in the array
//   const minIndex = numbers.findIndex((num) => num === Math.min(...numbers));

//   // Create a new array deleting the first finded smallest element
//   newArray = [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
//   console.log('Array filtered from the first smallest number: ', newArray);
//   return newArray;
// }
// removeFirstSmallest([2, 2, 1, 2, 1]);

//Other solution
function removeSmallest(numbers) {
  // Create a copy of the array so as not to change the original
  numbers = numbers.slice(0);
  console.log('Copy array: ', numbers);

  // Find the smallest value in the array
  const min = Math.min(...numbers);
  console.log('The smallest number in the array is: ', min);

  // Find the index of the first occurrence of the smallest value
  const index = numbers.indexOf(min);
  console.log('Index of the first smallest number in the array is: ', index);

  // Remove the element at the found index
  numbers.splice(index, 1);

  console.log('Array filtered from the first smallest number: ', numbers);
  return numbers;
}

removeSmallest([2, 2, 1, 2, 1]);
