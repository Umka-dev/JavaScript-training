//Task:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//My solution
function evenOrOdd(number) {
  console.log(number % 2 === 0 ? 'Even number' : 'Odd number');
  return number % 2 === 0 ? 'Even' : 'Odd';
}

evenOrOdd(7);

//Other solution
// const evenOrOdd = (number) => number % 2 ? "Odd" : 'Even';
