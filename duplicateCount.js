function duplicateCount(text) {
  
  const string = text.toLowerCase().split('').sort();
  let duplicates = [];

  for (let i = 0; i < string.length; i++) {
    if ((string[i] === string[i + 1]) && !duplicates.includes(string[i])) {
      duplicates.push(string[i])
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