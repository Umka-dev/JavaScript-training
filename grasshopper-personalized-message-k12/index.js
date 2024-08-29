//Task:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case	                 return
// name equals owner	'Hello boss'
// otherwise	        'Hello guest'

//My solution
function greet(name, owner) {
  if (name === owner) {
    console.log(`Hello boss`);
    return `Hello boss`;
  }
  console.log(`Hello guest`);
  return `Hello guest`;
}

greet('Simone', 'Daniel');

// Other solution
// function greet (name, owner) {
//     return name === owner ? 'Hello boss' : 	'Hello guest';
//   }

// Other solution
// function greet (name, owner) {
//     return `Hello ${name==owner?'boss':'guest'}`
//   }
