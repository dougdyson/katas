const rangeExtraction =  (r) => {
  // return r.reduce((a,v,i,arr) => arr[i+1] - v != 1 ? a += `,${String(v)}` : a += `-${String(v)}`);
  let range = [r[0]];
  
  for (let i = 1; i < r.length; i++) {
    const c = r[i];
    const p = r[i-1];
    const li = range.length-1;
    (c - p != 1) ? range.push(c) : range[li] = range[li].toString().slice(0,2) + `-${c}`
  }

  return range.toString();
}

let test = rangeExtraction([-2,-1,0,1,2,4]);
test;
test = rangeExtraction([-2,-1,0,2,4,5]);
test;
test = rangeExtraction([-2,-1,0,1,2,4,5,6]);
test

module.exports = rangeExtraction