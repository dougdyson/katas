function add(a, b) {
  // reduceRight the smallest number (as a string or as an array of numbers?)
  // convert each element to a number and add both inputs via the index of the element
  // check for a carry and add it to the next element
  // convert the end result to a string, and return it
  return (BigInt(a) + BigInt(b)).toString();
}

module.exports = add