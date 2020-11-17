function descendingOrder(num) {
  return parseInt (num.toString().split("").sort(function(a, b){return b-a}).join(''));
}

module.exports = descendingOrder;