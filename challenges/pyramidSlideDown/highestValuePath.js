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

  // initialize loop variables
  let sum = associativePyramid[0][0].value; //?
  let prevCol = 0;
  let row = 1;
  let col = 0;
  associativePyramid.length //?

  // loop to find highest value path
  while (row < associativePyramid.length) {
    
    row; //?
    const originalCol = associativePyramid[row][col].col //?
    const colValue = associativePyramid[row][col].value  //?
    
    // the difference of the original column value and the current column equals positioning in the sorted row
    // if the difference is 0, same column as the previous row
    // if the difference is 1, next column
    // if the difference is 2, path dead end, go to next column
    const compareColumns =  originalCol - prevCol //?
    
    switch (compareColumns) {
      
      // same column
      case 0:
        sum = sum + colValue; //?
        row = row + 1; //?
        break;
      
      // next column
      case 1:
        sum = sum + colValue; //?
        prevCol = col //?
        col = col + 1 //?
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
// highestValuePath([[3],[3, 4],[4, 3, 5]]); //?
highestValuePath([[3],[7, 4],[2, 4, 6],[8, 5, 9, 3]]); //?

module.exports = highestValuePath;