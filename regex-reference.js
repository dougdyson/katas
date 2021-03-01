const s = "hello world boom";
// find space
// const r = /\s/g;
// // find word
// const i = r.exec(s).index; //?
// // respell word
// const pigWord = s.slice(1, i) + s.slice(0, 1).toLowerCase().concat('ay'); //?

// The above looks like a good candidate for reduce

//s.split(' '); //?
//s;

const pw = s.split(' ')
            .reduce((a, v) => a += v.slice(2) + v.slice(0,2) + 'ay ', s.slice(2) + s.slice(0,1) + 'ay '); //?

pw;