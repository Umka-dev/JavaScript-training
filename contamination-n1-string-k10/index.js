//Task:
// An AI has infected a text with a character!!
// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

//My solution
// function contamination(text, char) {
//   if (!text.length || !char.length) return '';

//   const contaminatedText = text.replaceAll(/./gi, char);
//   console.log('Contaminated text:', contaminatedText);
//   return contaminatedText;
// }

//Other solution
// function contamination(text, char) {
//   return text.split("").fill(char).join("");
// }

//Other solution
function contamination(text, char) {
  // Check if either text or character is empty
  if (text === '' || char === '') {
    return '';
  }

  // Replace all characters in text with the given character
  const contaminatedText = char.repeat(text.length);
  console.log('Contaminated text:', contaminatedText);

  return contaminatedText;
}

contamination('//case', 'z');
