function sameMultiplicity (a1, a2) {
  let isSame = false;
  
  if (a1.length == a2.length){
    for (let number of a1){
      if (a2.includes(number * number)){
        isSame = true;
      } else {
        return false;
      }
    }
  }
  return isSame;
}

module.exports = sameMultiplicity;