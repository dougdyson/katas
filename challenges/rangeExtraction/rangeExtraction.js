const rangeExtraction = (r) => {
  return r.reduce((a,v,i,arr) => arr[i+1]-v=== 1 ? a : a += `,${String(v)}`)
}

module.exports = rangeExtraction;