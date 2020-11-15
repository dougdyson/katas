function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (char in pin) {
    if (pin[char] > '9' || pin[char] < '0' ) {
      return false;
    }
  }
  return true;
}

module.exports = validatePIN;