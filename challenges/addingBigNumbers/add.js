function add(a, b) {
  // reduceRight the smallest number (as a string or as an array of numbers?)
  // convert each element to a number and add both inputs
  // convert the result to a string
  return (BigInt(a) + BigInt(b)).toString();
}

module.exports = add