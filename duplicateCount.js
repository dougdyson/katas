function duplicateCount(text) {
  
  const str = text.toLowerCase().split('').sort();
  let dupeChars = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if ((currentChar === str[i + 1]) && !dupeChars.includes(currentChar)) {
      dupeChars.push(currentChar)
    }
  }
  return dupeChars.length;
}

module.exports = duplicateCount;