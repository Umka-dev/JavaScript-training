//Task:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//My solution
function repeatStr(n, s) {
  const repeatedStr = s.repeat(n);
  console.log('Type of output data: ', typeof repeatedStr);
  console.log(`String ${s} repeated ${n} times: `, repeatedStr);
  return repeatedStr;
}

repeatStr(5, 'ha ');

//Other solution
// function repeatStr(n, s) {
//   let str = '';
//   for (var i = 0; i < n; i++) str += s;
//   return str;
// }
