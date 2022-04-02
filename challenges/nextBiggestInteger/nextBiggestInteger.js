const nextBiggestInteger = (int) => {
  
  // integer map for later iteration
  const numMap = int.toString().split('').sort()

  // maximum number possible
  const maxNum = numMap.reverse().join('') //?

  // get next index from numMap
  const nextIndex = (i) => {
    const currentIndex = numMap.indexOf(i);
    
    if (currentIndex === numMap.length - 1) return numMap[0]
    
    return nextIndex = currentIndex + 1;
  }

  for (let index = int; index < maxNum; index++) {
    const element = array[index];
    
  }
}

const test = nextBiggestInteger(2017) //?

module.exports = nextBiggestInteger;