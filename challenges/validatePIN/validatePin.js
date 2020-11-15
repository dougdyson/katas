function validatePIN(pin) {
  const PIN = pin.split('');
  if (PIN.length !== 4 && PIN.length !== 6) {
    return false;
  }
  for (char of PIN) {
    if (char > '9' || char < '0' ) {
      return false;
    }
  }
  return true;
}

module.exports = validatePIN;