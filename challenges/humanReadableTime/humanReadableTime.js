const humanReadableTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;
  const formatTime = (time) => `${('0' + time).slice(-2)}`;
  return `${formatTime(hours)}:${(formatTime(minutes))}:${(formatTime(seconds))}`; 
}

module.exports = humanReadableTime;