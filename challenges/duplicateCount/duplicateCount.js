function duplicateCount(text) {

  // here is a refactor using lastIndexOf()
  // which removes the need to pre-sort the array.

  const string = text.toLowerCase().split('');
  let duplicates = [];
  for (let i = 0; i < string.length; i++) {
    if (string.lastIndexOf(string[i]) !== i && !duplicates.includes(string[i])) {
      duplicates.push(string[i]);
    }
  }
  return duplicates.length;
}

  duplicateCount('Hello Dolly'); //?

  module.exports = duplicateCount;
  
  // to dig into further: filter && match
  //
  //const string = text.toLowerCase().split('').sort();

  // first refactor, with includes
  // for (let i = 0; i < string.length; i++) {
  //   if ((string[i] === string[i + 1]) && !duplicates.includes(string[i])) {
  //     duplicates.push(string[i]);
  //   }
  // }

  // in earlier attempts, was trying to use indexOf() !== lastIndexOf()
  // but didn't find a way for it to account for instances where there
  // were 3+ instances of a character. 
  // 
  // the commented out example below this function using filter 
  // has the solution logic. can also see how filter encapsulates
  // the classic c-style for loop I used in my first refactor
  // function duplicateCount(text){
//   return text.toLowerCase().split('').filter(function(val, i, arr){
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;
// }
//
// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }