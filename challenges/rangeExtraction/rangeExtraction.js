const rangeExtraction =  (r) => {
  // initialize closure output variable
  let range = [r[0]];

  for (let i = 1; i < r.length; i++) {
    // check if current and previous array element are sequential
    if (r[i] - r[i-1] != 1) {
      range.push(r[i])
    } else {
      const li = range.length-1; // last index of range array
      const sliceTo = range[li].toString().lastIndexOf('-') // find the last '-'
      if (sliceTo <= 0){ // first array element is '-' char or '-' is not found
        range[li] += `-${r[i]}`
      } else {
        if (r[i] < 1){
          // account spacing for negative numbers
          range[li] = range[li].toString().slice(0,sliceTo-1) + `-${r[i]}` 
        } else {
          // account spacing for positive numbers
          range[li] = range[li].toString().slice(0,sliceTo+1) + `${r[i]}`
        }
      }
    }
  }
  range
  return range.toString();
}

rangeExtraction([2,4,5,6,10,11,12,13]);


module.exports = rangeExtraction