function duplicateCount(text) {
  
  //const string = text.toLowerCase().split('').sort();
  const string = text.toLowerCase().split('');
  let duplicates = [];

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

  // here is a refactor using indexOf() && lastIndexOf()
  // which removes the need to pre-sort the array
  for (let i = 0; i < string.length; i++) {
    if (string.lastIndexOf(string[i]) !== i && !duplicates.includes(string[i])) {
      duplicates.push(string[i]);
    }
  }
  return duplicates.length;
}

module.exports = duplicateCount;

// to dig into further: filter && match
//
// function duplicateCount(text){
//   return text.toLowerCase().split('').filter(function(val, i, arr){
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;
// }
//
// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }