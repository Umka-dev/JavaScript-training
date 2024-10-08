//Task:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//My solution
function digitize(num) {
  const arrOfDigits = Array.from(String(num))
    .map((n) => +n)
    .reverse();
  console.log(arrOfDigits);
  return arrOfDigits;
}

//Other solution
// function digitize(num) {
//   const arrOfDigits = Array.from(String(num), Number).reverse();
//   console.log(arrOfDigits);
//   return arrOfDigits;
// }

digitize(35231);
