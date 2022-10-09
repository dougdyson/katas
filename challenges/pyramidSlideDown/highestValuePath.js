const highestValuePath = (tree) => {
  
  // create an associative array to store the initial index values
  const associativeTree = tree.map((row) => {
    return row.map((value, valueIndex) => {
      return {"value": value,"column": valueIndex}
    }
  )});

  // sort each row in descending order
  associativeTree.forEach((row) => row.sort((a, b) => b.value - a.value));

  associativeTree

  // compare the column values of each row to determine the highest value path
  let sum = associativeTree[0][0].value; //?
  let prevCol = 0
  let row = 1;
  let col = 0;
  while (row < associativeTree.length) {
    if (associativeTree[row][col].column === (prevCol || prevCol + 1) ) //?
    { 
      sum = sum + associativeTree[row][col].value //?
      prevCol = associativeTree[row][col].column //?
      row++; //?
    } else {
      col = col + 1 //?
      sum = sum + associativeTree[row][col].value //?
      prevCol = associativeTree[row][col].column //?
      row++; //?
    }
  }
  return sum; //?
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
highestValuePath([[3],[7, 4],[2, 4, 6]]); //?
// highestValuePath([[3],[7, 4],[2, 4, 6],[8, 5, 9, 3]]); //?

module.exports = highestValuePath;