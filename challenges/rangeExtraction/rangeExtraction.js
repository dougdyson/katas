const rangeExtraction =  (r) => {
  // initialize closure output variable
  let range = [r[0]];

  for (let i = 1; i < r.length; i++) {
    // check if current and previous array element are sequential
    if (Math.abs(r[i] - r[i-1]) != 1) {
      range.push(r[i]);
    } else {
      const lastIndex = range.length-1;
      const sliceTo = range[lastIndex].toString().lastIndexOf('-') // find the last '-'
      if (sliceTo <= 0){ // first array element is '-' char or '-' is not found
        range[lastIndex] += `-${r[i]}`
      } else {
        if (r[i] < 1){
          // account spacing for negative numbers
          range[lastIndex] = range[lastIndex].toString().slice(0,sliceTo-1) + `-${r[i]}` 
        } else {
          // account spacing for positive numbers
          range[lastIndex] = range[lastIndex].toString().slice(0,sliceTo+1) + `${r[i]}`
        }
      }
    }
  }
  range
  return range.toString();
}

re = rangeExtraction([-12,-6,-5,-4,-1,0,2,3,10,11,12,13])
re

module.exports = rangeExtraction