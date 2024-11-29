console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]));

function validSolution(board) {
  // Check for 0s
  for (let row of board) {
    if (row.includes(0)) {
      return false;
    }
  }

  // Check rows
  for (let row of board) {
    if (!isValidSet(row)) {
      return false;
    }
  }

  // Check columns
  for (let col = 0; col < 9; col++) {
    let column = [];
    for (let row = 0; row < 9; row++) {
      column.push(board[row][col]);
    }
    if (!isValidSet(column)) {
      return false;
    }
  }

  // Check 3x3 subgrids
  for (let rowStart = 0; rowStart < 9; rowStart += 3) {
    for (let colStart = 0; colStart < 9; colStart += 3) {
      let subgrid = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          subgrid.push(board[rowStart + i][colStart + j]);
        }
      }
      if (!isValidSet(subgrid)) {
        return false;
      }
    }
  }

  return true;
}

function isValidSet(nums) {
  const sorted = nums.slice().sort();
  return sorted.join() === '1,2,3,4,5,6,7,8,9';
}
