// Task:
//Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

// My solution
function buildString(...template) {
  const correctString = `I like ${template.join(', ')}!`;
  console.log('Correct string is: ', correctString);
  return correctString;
}

buildString('Cheese', 'Milk', 'Chocolate');
