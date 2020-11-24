function sameMultiplicity (arr1, arr2) {

  let isSame = false;

  if (arr1.length > 0 && (arr1.length == arr2.length)){
    isSame = true;
  }

  return isSame;
}

module.exports = sameMultiplicity;