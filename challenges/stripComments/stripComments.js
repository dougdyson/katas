const strippedComments = (input, markers) => {

  // add multi-line
  // add array of markers

  // array method, leaving for temp ref
  // return input.slice(markers[0], [...input].findIndex(char => char === markers[0]))
  
  return input.slice(0, input.indexOf(markers[0])) //?

}

strippedComments("apples, plums | and bananas", '|'); //? 

module.exports = strippedComments;