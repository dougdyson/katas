const rangeExtraction =  (r) => {
  // return r.reduce((a,v,i,arr) => arr[i+1] - v != 1 ? a += `,${String(v)}` : a += `-${String(v)}`);

  let range = r[0];

  const rangeSet = r.reduce((a,v,i,arr) => {
    console.log(v - arr[i+1])
    // if (v - arr[i+1] === -1) return console.log('');
  }, range)
}

module.exports = rangeExtraction