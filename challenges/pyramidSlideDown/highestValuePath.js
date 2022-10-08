const highestValuePath = (tree) => {
  
  // create an associative array to store the initial index values
  const associativeTree = tree.map((row) => {
    return row.map((value, valueIndex) => {
      return {"value": value,"column": valueIndex}
    }
  )});

  // sort each row in descending order
  associativeTree.forEach((row) => row.sort((a, b) => b.value - a.value));

  // reduce associative array by column value: if the column value doesn't match
  // the next column value, move to next column
  const highestValuePath = associativeTree.reduce((acc, row) => {
    row[0].column //?
    // const nextColumn = acc.column + 1; //?
    // const nextValue = row.find((value) => value.column === nextColumn);
    // return nextValue ? nextValue : acc;
  }, 0); //?
  
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

highestValuePath([[3],[4, 7]]); //?
// highestValuePath([[3],[7, 4],[2, 4, 6]]); //?
// highestValuePath([[3],[7, 4],[2, 4, 6],[8, 5, 9, 3]]); //?

module.exports = highestValuePath;