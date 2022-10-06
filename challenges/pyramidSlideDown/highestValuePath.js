const highestValuePath = (tree) => {
  
  // create an associative array to store the initial index values
  const associativeTree = tree.map((row, rowIndex) => {
    return row.map((value, valueIndex) => {
      return {"value": value,"column": valueIndex}
    }
  )});

  // sort each row in descending order
  associativeTree.forEach((row) => {
    row.sort((a, b) => {
      return b.value - a.value
    })
  });

  // sum up column 0 values
  const maxPossible = associativeTree.reduce((accumulator, row) => accumulator + row[0].value, 0);

  return associativeTree;

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
// highestValuePath([[3],[4, 7]]); //?

module.exports = highestValuePath;