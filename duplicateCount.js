function duplicateCount(string) {
  
  const str = string.toLowerCase().split('').sort();
  let dupeChars = [];

  function checkIfCharExists(character) {
    for (let i = 0; i < dupeChars.length; i++) {
      if (dupeChars[i] === character) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (currentChar === str[i + 1]) {
      if (!checkIfCharExists(currentChar)) {
        dupeChars.push(currentChar)
      }
    }
  }
  return dupeChars.length;
}

module.exports = duplicateCount;