// The below version is th first attempt at solving this kata.
// Refactored Copilot's solution to make it more readable.
// 239 characters
const humanReadableTimeV1 = (seconds) => {
  const hours = seconds / 3600 | 0;
  const minutes = seconds % 3600 / 60 | 0;
  seconds = seconds % 60;
  const formatTime = (time) => `${('0' + time).slice(-2)}`;
  return `${formatTime(hours)}:${(formatTime(minutes))}:${(formatTime(seconds))}`; 
}

// The below version is the second attempt at solving this kata.
// It is much more concise than the first attempt.
// 115 characters = 52% decrease in code
const humanReadableTime = (s) => [s/3600 | 0, s/60 % 60 | 0, s % 60 | 0].map(i => `${i}`.padStart(2, 0)).join(':');

module.exports = humanReadableTime;