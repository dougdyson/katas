const strippedComments = (input, markers) => {

  // do for one marker first, then do for array of markers

  const marker = markers[0]; //?
  //let comments = [...input].reduce((a, v, i, arr) => v === marker ? a : a + v ) //?

  const commentStart = [...input].findIndex(char => char === marker);
  
  return input.slice(0, commentStart) //?
}

strippedComments("apples, plums | and bananas", '|'); //? 

module.exports = strippedComments;