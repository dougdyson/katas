const strippedComments = (input, markers) => {

  return input.slice(markers[0], [...input].findIndex(char => char === markers[0]))
  
}

strippedComments("apples, plums | and bananas", '|'); //? 

module.exports = strippedComments;