function duplicateCount(text) {
  return text.toLowerCase()
             .split('')
             .sort()
             .reduce((p,c,i,a) => (c === a[i+1] && c != a[i-1] ? p+1 : p ), 0);
}
// UPDATE: refactored above with 58% reduction in code!
  
function duplicateCountV1(text) {
  //first refactor, with includes

  const string = text.toLowerCase().split('').sort();
  let duplicates = [];
  
  for (let i = 0; i < string.length; i++) {
    if ((string[i] === string[i + 1]) && !duplicates.includes(string[i])) {
      duplicates.push(string[i]);
    }
  }

  return duplicates.length;
}
// in earlier attempts, was trying to use indexOf() !== lastIndexOf()
// but didn't find a way for it to account for instances where there
// were 3+ instances of a character. 
// 
// the example below this function using filter 
// has the solution logic. can also see how filter encapsulates
// the classic c-style for loop I used in my first refactor

// function duplicateCountV1(text){
//   return text.toLowerCase().split('').filter(function(val, i, arr){
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;
// }

module.exports = duplicateCount;
