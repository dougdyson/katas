const s = "Hello World!";
// find space
const r = / /g;
// find word
const i = r.exec(s).index; //?
// respell word
const pigWord = s.slice(1, i) + s.slice(0, 1).toLowerCase() + 'ay'; //?

// The above looks like a good candidate for reduce

