function isPrime(number) {

  if (typeof(number) !== 'number' || number === null || number < 2) {
    return false;
  }

  return (Number.isInteger(number / 2) || Number.isInteger(number / 3)) ? true : false;

}

module.exports = isPrime;