const highestValuePath = (pyramid) => {
  
  // create an associative array to store the initial index values
  const associativePyramid = pyramid.map((row) => {
    return row.map((value, valueIndex) => {
      return {"value": value, "col": valueIndex}
    }
  )});

  // sort each row in descending order
  associativePyramid.forEach((row) => row.sort((a, b) => b.value - a.value));

  associativePyramid

  // compare the column values of each row to determine the highest value path
  let sum = associativePyramid[0][0].value; //?
  let prevCol = 0;
  let row = 1;
  let col = 0;
  associativePyramid.length //?

  while (row < associativePyramid.length) {
    
    row; //?
    const originalCol = associativePyramid[row][col].col //?
    const colValue = associativePyramid[row][col].value  //?
    const compareColumns =  originalCol - prevCol //?
    
    switch (compareColumns) {
      
      // same column
      case 0:
        sum = sum + colValue; //?
        row = row + 1; //?
        break;
      
      // next column
      case 1:
        prevCol = col //?
        col = col + 1 //?
        sum = sum + colValue; //?
        row = row + 1 //?
        break;
      
      // go over to the next column
      default:
        col = col + 1; //?
        break;
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

// highestValuePath([[3],[6, 7]]); //?
// highestValuePath([[3],[7, 4],[4, 3, 5]]); //?
highestValuePath([[3],[7, 4],[2, 4, 6],[8, 5, 9, 3]]); //?

module.exports = highestValuePath;