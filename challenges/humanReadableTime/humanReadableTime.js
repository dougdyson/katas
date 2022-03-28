// The below version is th first attempt at solving this kata.
// Refactored Copilot's solution to make it more readable.

const humanReadableTime = (seconds) => {
  const hours = seconds / 3600 | 0;
  const minutes = seconds % 3600 / 60 | 0;
  seconds = seconds % 60;
  const formatTime = (time) => `${('0' + time).slice(-2)}`;
  return `${formatTime(hours)}:${(formatTime(minutes))}:${(formatTime(seconds))}`; 
}

// Some examples of tighter code:
//
// p=n=>`0${n}`.slice(-2),humanReadable=(s)=>(m=s/60|0,p(m/60|0)+':'+p(m%60)+':'+p(s%60))
//
// let humanReadable =s=> [s/3600|0,s/60%60|0,s%60].map(i=>`${i}`.padStart(2,0)).join`:`
//
// const humanReadable = seconds => [seconds / 3600 ^ 0, seconds / 60 % 60 ^ 0, seconds % 60].map(val => `${val}`.padStart(2, `0`)).join(`:`); 

module.exports = humanReadableTime;