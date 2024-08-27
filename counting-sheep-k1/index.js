// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//My solution
// function countSheeps(sheeps) {
//   sheeps = [undefined, null, false, true, true, false, null, undefined];

//   const availableSheepArray = sheeps.filter(function (isSheep) {
//     return isSheep;
//   });

//   let count = availableSheepArray.length;

//   console.log('Flock with available sheeps: ', availableSheepArray);
//   console.log('Number of sheeps in a flock: ', count);

//   return count;
// }

//Better solution
// function countSheeps(arrayOfSheeps) {
//   arrayOfSheeps = [undefined, null, false, true, true, false, null, undefined];
//   var count = 0;

//   arrayOfSheeps.forEach(function (sheep) {
//     if (sheep) count++;
//   });
//   console.log('Number of sheeps in a flock: ', count);
//   return count;
// }

//The Best solution
function countSheeps(arrayOfSheeps) {
  arrayOfSheeps = [undefined, null, false, true, true, false, null, undefined];
  let count = arrayOfSheeps.filter(Boolean).length; //The same as: arrayOfSheeps.filter(function(x){return Boolean(x)}).length;
  console.log('Number of sheeps in a flock: ', count);
  return count;
}

countSheeps();
