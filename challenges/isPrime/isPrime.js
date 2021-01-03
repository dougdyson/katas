function isPrime(number) {

  return (number % 2 === 0 && typeof(number) === number || number === 2) ? true : false;

}

module.exports = isPrime;