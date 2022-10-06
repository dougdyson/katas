const highestValuePath = (tree) => {

  const associativeTree = tree.map((row, rowIndex) => {
    return row.map((value, valueIndex, valueArray) => [{"value": value,"index": valueIndex}]) //?
  })
}

const highestValuePathCopilot = (pyramid) => {
  let sum = 0;
  let row = 0;
  let col = 0;
  while (row < pyramid.length) {
    sum += pyramid[row][col];
    if (pyramid[row + 1] && pyramid[row + 1][col] < pyramid[row + 1][col + 1]) {
      col++;
    }
    row++;
  }
  return sum;
}

highestValuePath([[3],[7, 4],[2, 4, 6],[8, 5, 9, 3]]); //?

module.exports = highestValuePath;