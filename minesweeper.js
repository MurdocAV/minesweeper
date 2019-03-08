document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
let board = {};
board.cells = [];
let boardCells = board.cells;
// option for User Input on the number of cells
let numOfCells = 9; // n.b. hard-coded
let maxRowsColumns = Math.sqrt(numOfCells);

for (let i = 0; i < maxRowsColumns; i++) {
	for (let j = 0; j < maxRowsColumns; j++){
		boardCells.push({row: i, col: j, isMine: false, hidden: true});
	}
}
console.log(boardCells);// Outputs the board.cell object - testing

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
}

