const strippedComments = (input, markers) => {

  // for each marker, slice characters following marker until new line
  // i.e. strippedComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]) = "apples, plums\npears\noranges"
  // good candidate for replace

  // replace(look for, replace with)
  // look for = marker
  // replace with = ''

  // do without regex first, then apply regex

  return input.replace(markers, '');

}

strippedComments("apples, plums % and bananas", '%'); //? 

module.exports = strippedComments;