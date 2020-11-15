function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6){
    for (char of pin) {
      if (char > '9' || char < '0' ) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

module.exports = validatePIN;