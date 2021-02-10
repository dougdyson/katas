function pigIt(englishSentence) {

  const isLetter = (char) => char.toLowerCase().charCodeAt() > 96 && char.toLowerCase().charCodeAt() < 123 ? true : false; //?
  let pigSentence = '';

  for (let i = 0; i < englishSentence.length; i++) {
    const letter = englishSentence[i];
    isLetter(letter) //?
    
    // TO DO:
    // - select words and transform
    // - build new string
  }
  
  return null;

}

pigIt("Hello World!");

module.exports = pigIt;