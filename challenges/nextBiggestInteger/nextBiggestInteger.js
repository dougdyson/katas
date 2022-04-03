const nextBiggestInteger = int => {
  
  // integer map for later iteration
  const numMap = int.toString().split('').sort() //?

  // maximum number possible
  const maxNum = numMap.reverse().join('') //?

  // get next index from numMap
  const nextIndex = i => (numMap.indexOf(i) > numMap.length - 1) ? i++ : 0; //?

  // reduce int to next highest number from numMap
  const nextHighest = int => { 
    let i = int; //?
    maxNum //?
    while (i < maxNum) {
      // get next value from numMap
      const nextNum = nextIndex(i); //?
      // add next value to int
      //i++; //?
    }
    return i //?
  }

  return nextHighest(int); //?

  const testNextIdx = nextIndex(0) //?
}

const test = nextBiggestInteger(2017) //?


module.exports = nextBiggestInteger;