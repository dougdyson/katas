function pigIt(englishSentence) {

  const isLetter = (char) => char.toLowerCase().charCodeAt(0) > 96 && char.toLowerCase().charCodeAt(0) < 123 ? true : false; //?

  for (let i = 0; i < englishSentence.length; i++) {
    const letter = englishSentence[i];
    isLetter(letter) //?
  }
  
  
  return null;

}

pigIt("Hello World!");

module.exports = pigIt;