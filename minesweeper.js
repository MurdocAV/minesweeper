document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
let board = {};
board.cells = [];
let boardCells = board["cells"];
// option for User Input on the number of cells
let numOfCells = 9; // n.b. hard-coded
let maxRowsColumns = Math.sqrt(numOfCells);
let numOfMines = minesGenerator(maxRowsColumns);
let mineCount = numOfMines; // important global variable for function mineCheck();

for (let i = 0; i < maxRowsColumns; i++) {
	for (let j = 0; j < maxRowsColumns; j++){
		
		let tempCellObj = {row: i, col: j, isMine: false, hidden: true};//sets default state
		let mineValue = mineCheck(numOfMines, numOfCells); //checks if cell should be a mine
		
		if (mineValue == 1) {
			tempCellObj.isMine = true;
		}
		else if (mineValue != 1){
			// does nothing since default state is the same.
		}

		boardCells.push(tempCellObj);
		//console.log("row + " + tempCellObj.row + "col " + tempCellObj.col + "\n is it a mine? " + tempCellObj.isMine);
	}
}
console.log(boardCells);// Outputs the board.cell object - testing
console.log("mineCount " + mineCount);// Outputs max number of mines - testing

function minesGenerator(maxRowsColumns){ // can add second (..., difficulty) arg. Function Creates AMMOUNT of mines
	// should randomly generate a mine return t/f depending on number of cells/difficulty
	let maxMines = (maxRowsColumns - 1) * (maxRowsColumns - 1); //Follows Microsoft's (x-1)(y-1) formula
	maxMines = Math.floor(maxMines); // removes half of mines for easier difficulty
	//maxMines += 1; // Adds extra mine ...don't want it to be too easy -_-
	return maxMines
}

function mineCheck(numOfMines, numOfCells){
	// should randomly generate a mine return t/f depending on number of cells & num of mines left
	let mineCheck = Math.floor(Math.random(mineCount) * numOfCells);
	let rtnValue
	if (mineCheck == 0){
		rtnValue = 1;
		mineCount -= 1; //decrements mineCount
	}
	else {
		rtnValue = 0;
	}
	//console.log("Is it a mine: " + mineCheck);
	return rtnValue
}

function startGame () {
 // Don't remove this function call: it makes the game work!
 
 // This function loops through each cell calls a count on s
  for (let i = 0; i < numOfCells; i++){
	let temp = countSurroundingMines(boardCells[i]);
	let activeCell = boardCells[i];
	activeCell.surroundingMines = temp;
  }
  
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
	//console.log("The cell row is " + cell.row, "The cell col is " + cell.col);
	let surrounding = lib.getSurroundingCells(cell.row, cell.col);
	let countOfMinesNear = 0;
	
	for (let i = 0; i < surrounding.length; i++){
		if (surrounding[i].isMine == true) {
			countOfMinesNear += 1;
		}
	}
	/*
	if (countOfMinesNear > 0){
		console.log("The count of mines is " + countOfMinesNear + " Come and ge me I'm cell... Row: " + cell.row + " Col: " + cell.col);
	}
	*/
	return countOfMinesNear;
}

