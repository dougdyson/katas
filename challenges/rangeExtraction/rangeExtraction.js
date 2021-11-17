const rangeExtraction =  (r) => {
  // return r.reduce((a,v,i,arr) => arr[i+1] - v != 1 ? a += `,${String(v)}` : a += `-${String(v)}`);
  let range = [r[0]];
  
  for (let i = 1; i < r.length; i++) {
    const current = r[i];
    const previous = r[i-1];
    const lastRangeIndex = range.length-1;
    console.log(current - previous);
    (current - previous != 1) ? range.push(current) : range[lastRangeIndex] += `-${current}`
    
  }

  return range.toString();
}

let test = rangeExtraction([-2,-1,0,1,2,4]);
test;
// test = rangeExtraction([-2,-1,0,2,4,5]);
// test;
// test = rangeExtraction([-2,-1,0,1,2,4,5,6]);
// test

module.exports = rangeExtraction