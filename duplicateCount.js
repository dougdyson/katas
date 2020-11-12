function duplicateCount(string) {

  const test = 'aabBcde';
  
  const str = string.toLowerCase();
  let dupeCount = 0;
  const stringLength = str.length;

  if (!str) {
    return dupeCount;
  }

  for (let i = 0; i < stringLength; i++) {

    const currentString = str.slice(i);
    const currentChar = currentString.slice(0,1);
    const firstIndex = currentString.indexOf(currentChar)
    const lastIndex = currentString.lastIndexOf(currentChar)
    
    if (firstIndex < lastIndex) {
      dupeCount++;
    }
  }
  console.log('dupeCount:', dupeCount);
  return dupeCount;
}

module.exports = duplicateCount;