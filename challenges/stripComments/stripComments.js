const strippedComments = (input, markers) => {

  // for each marker, slice characters following marker until new line
  // i.e. strippedComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]) = "apples, plums\npears\noranges"
  // good candidate for replace

  // replace(look for, replace with)
  // look for = marker
  // replace with = ''

  // do without regex first, then apply regex
  // use string or convert to array?
  // string
  let marker = markers[0];

  input = input.replace(marker, ''); //?

  return [...input].join(('')) //?

}

strippedComments("apples, plums | and bananas", '|'); //? 

module.exports = strippedComments;