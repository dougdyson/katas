function pigIt(englishSentence) {
  // consider ascii values

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  for (let i = 0; i < englishSentence.length; i++) {
    const letter = englishSentence[i];
    letters.includes(letter)
      ? console.log(letter, ' is a letter')
      : console.log(letter, ' is not a letter')
    }
  
  
  return null;

}

module.exports = pigIt;