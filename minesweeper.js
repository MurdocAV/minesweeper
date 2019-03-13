document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
// Aditional Functionality: Option for User Input on the number of cells.

let board = {};
board.cells = [];
let boardCells = board["cells"];// shrt cut to cell-Obj
let maxRowsColumns = userInput();
let numOfCells = maxRowsColumns * maxRowsColumns; // n.b. hard-coded
let numOfMines = minesGenerator(maxRowsColumns);
let mineCount = numOfMines; // important global variable for function mineCheck();

for (let i = 0; i < maxRowsColumns; i++) {
  //Function goes through all the cells and adds basic object functionality into the array at board.cells list
	for (let j = 0; j < maxRowsColumns; j++){	
		let tempCellObj = {row: i, col: j, isMine: false, hidden: true};//sets default state
		let mineValue = mineCheck(numOfMines, numOfCells); //checks if cell should be a mine	
		if (mineValue == 1) {
			tempCellObj.isMine = true;
		}
		boardCells.push(tempCellObj);
	}
}


function userInput() {
  let input = prompt('Choose a number (from 3 to 6), to make up the square grid: ');
  return input
}

// AddFunc: 2nd Arg (difficulty). Function for ammount of mines
function minesGenerator(maxRowsColumns) {
	let maxMines = (maxRowsColumns - 1) * (maxRowsColumns - 1); //Follows Microsoft's (x-1)(y-1) formula
	maxMines = Math.floor(maxMines); 
	return maxMines
}


/* Randomly generate a mine & return t/f depending on:
    - Num of Total cells (Num of Potentail cells to mine?)
    - Num of Potentail mines left
    - Currently an incredibly week function call
 */
function mineCheck(numOfMines, numOfCells) {
	let mineCheck = Math.floor(Math.random(numOfMines) * numOfCells);
	let rtnValue = 1;
	if (mineCheck == 0){
		rtnValue = 1;
	}
	else {
		rtnValue = 0;
	}
	return rtnValue
}


 // Don't remove this function call: it makes the game work!
function startGame () {
 // This loop goes through each cell Obj and adds a surroundingMines property.
  for (let i = 0; i < numOfCells; i++){
    let temp = countSurroundingMines(boardCells[i]);
    let activeCell = boardCells[i];
    activeCell.surroundingMines = temp;
  }
  
  // Event listeners for win condition.
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  
  lib.initBoard()
}

// Define this function to look for a win condition:
  // 1. Are all of the cells that are NOT mines visible?
  // 2. Are all of the mines marked?

function checkForWin () {
	
	for (let i = 0; i < numOfCells; i++){
		let currCell = boardCells[i];

    if (currCell.isMine == true) { // Outer level if statement
      //Inner level if statement
      if (currCell.isMarked == false)
        return
    } else { // Seperate if statment loop
      if (currCell.hidden == true)
        return
    }
  }

  lib.displayMessage('You win!')
}


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
function countSurroundingMines (cell) {
	//console.log("The cell row is " + cell.row, "The cell col is " + cell.col);
	let surrounding = lib.getSurroundingCells(cell.row, cell.col);
	let countOfMinesNear = 0;
	
	for (let i = 0; i < surrounding.length; i++){
		if (surrounding[i].isMine == true) {
			countOfMinesNear += 1;
		}
	}
	return countOfMinesNear;
}

