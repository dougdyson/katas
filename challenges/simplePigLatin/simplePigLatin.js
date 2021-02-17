function pigIt(englishSentence) {

  const isLetter = (char) => char.toLowerCase().charCodeAt() > 96 && char.toLowerCase().charCodeAt() < 123 ? true : false; //?
  let pigSentence = '';

  for (let i = 0; i < englishSentence.length; i++) {
    const letter = englishSentence[i];
    isLetter(letter) //?
    
    // TO DO:
    // - learn regex!
    // - select words and transform
    // - build new string
    //
    // this is a great kata for starting to learn regex!
  }
  
  return pigSentence;

}

pigIt("Hello World!");

module.exports = pigIt;