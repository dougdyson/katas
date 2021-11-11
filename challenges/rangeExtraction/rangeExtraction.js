const rangeExtraction = (r) => { 
  return r.reduce((a,v) => a += `,${String(v)}`)
}

module.exports = rangeExtraction;