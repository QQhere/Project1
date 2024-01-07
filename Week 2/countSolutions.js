/*
Count number of sudoku solutions
Description
Write a program to compute the number of sudoku solutions (fill the zero elements of a given partial sudoku table)
Fill numbers from 1, 2, 3, .., 9 to 9 x 9 table so that:
Numbers of each row are distinct
Numbers of each column are distinct
Numbers on each sub-square 3 x 3 are distinct
Input
Each line i (i = 1, 2, ..., 9) contains elements of the i
th
 row of the Sudoku table: elements are numbers from 0 to 9 (value 0 means the empty cell of the table)
Output
Write the number of solutions found

Example
Input
0 0 3 4 0 0 0 8 9
0 0 6 7 8 9 0 2 3
0 8 0 0 2 3 4 5 6
0 0 4 0 6 5 0 9 7
0 6 0 0 9 0 0 1 4
0 0 7 2 0 4 3 6 5
0 3 0 6 0 2 0 7 8
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
Output
64
*/
function countSolutions(input) {
  let inputArray = input.split('\n');
  let partialBoard = [];
  for (let i = 0; i < inputArray.length; i++) {
    partialBoard.push(inputArray[i].split(' ').map(Number));
  }
  let solutions = 0;

  function solve(board, row, col) {
    if (row === 9) {
      solutions++;
      return;
    }

    if (col === 9) {
      solve(board, row + 1, 0);
      return;
    }

    if (board[row][col] !== 0) {
      solve(board, row, col + 1);
      return;
    }

    for (let num = 1; num <= 9; num++) {
      if (isValid(board, row, col, num)) {
        board[row][col] = num;
        solve(board, row, col + 1);
        board[row][col] = 0;
      }
    }
  }

  function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) {
        return false;
      }
      if (board[i][col] === num) {
        return false;
      }
      const subRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
      const subCol = Math.floor(col / 3) * 3 + (i % 3);
      if (board[subRow][subCol] === num) {
        return false;
      }
    }
    return true;
  }

  solve(partialBoard, 0, 0);

  return solutions;
}