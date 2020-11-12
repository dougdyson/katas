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