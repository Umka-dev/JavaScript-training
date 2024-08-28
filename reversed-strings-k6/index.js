// Task
// Complete the solution so that it reverses the string passed into it.
// Examples:
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//My solution
// function reverseString(str) {
//   const reverseString = str.split('').reverse().join('');
//   console.log('Reversed string: ', reverseString);
//   return reverseString;
// }
// reverseString('Testing for fixed tests');

//Explanation
function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(''); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  console.log('Reversed string: ', joinArray);
  return joinArray; // "olleh"
}

reverseString('hello');

//Other solution
// function solution(str){
//     return [...str].reverse().join('');
//   }
