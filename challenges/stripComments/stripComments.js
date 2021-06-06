const strippedComments = (input, markers) => {

  // for each marker, slice characters following marker until new line
  // i.e. strippedComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]) = "apples, plums\npears\noranges"

  
  return input;
}

module.exports = strippedComments;