function pigIt(englishSentence) {
  
  const sentence = englishSentence.split(' ')

  for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    console.log(element);
  }
  
  return null;

}

module.exports = pigIt;