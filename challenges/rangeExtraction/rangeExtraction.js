const rangeExtraction =  (r) => {
  // return r.reduce((a,v,i,arr) => arr[i+1] - v != 1 ? a += `,${String(v)}` : a += `-${String(v)}`);
  
  // initialize output variable
  let range = [r[0]];

  for (let i = 1; i < r.length; i++) {
    const cv = r[i];   // current value
    const pv = r[i-1]; // previous value
    const li = range.length-1; // last index of range
    (cv - pv != 1) ? range.push(cv) 
                   : range[li] = range[li].toString().slice(0,2) + `-${cv}`
  }
  return range.toString();
}

let test = rangeExtraction([-2,-1,0,1,2,4,5,]);
test;
test = rangeExtraction([-2,-1,0,2,4,5]);
test;
test = rangeExtraction([-2,-1,0,1,2,4,5,6]);
test;

module.exports = rangeExtraction