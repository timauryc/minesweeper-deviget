const minesweeper = require('minesweeper');

const CellStateEnum = minesweeper.CellStateEnum;
const CellFlagEnum = minesweeper.CellFlagEnum;
const Board = minesweeper.Board;
const Cell = minesweeper.Cell;

BoardStateEnum = {
    0:"pristine",
    1:"in_progress",
    2:"lost",
    3:"WON"
};

let board;

const gameSettings = {
    beginner: {
        rows: 10,
        cols: 10,
        mines: 10
    },
    intermediate: {
        rows: 16,
        cols: 16,
        mines: 40
    },
    expert: {
        rows: 16,
        cols: 32,
        mines: 99
    }
}


function newGame(level) {
    console.log(level)
    let responseObject = {}
    if (!gameSettings.hasOwnProperty(level)) {
        responseObject = {
            status: 400,
            body: null
        }
    } else {
        let mineArray = minesweeper.generateMineArray(gameSettings[level]);
        board = new Board(mineArray);
        responseObject = {
            status: 200,
            body: {
                board: printBoard(),
                numRows: board.numRows(),
                numColums: board.numCols(),
                state: BoardStateEnum[board.state()]
            }
        }
    }
    return responseObject
}


function printBoard() {
    function printRow(rowArray, rowNum) {
        var i,
            cell,
            rowMatrix = []

        // Add each cell in the row to the string we will print
        for (i = 0; i < rowArray.length; i++) {
            cell = rowArray[i];
            if (cell.state === CellStateEnum.CLOSED) {
                if (cell.flag === CellFlagEnum.NONE) {
                    rowMatrix.push(' ')
                } else if (cell.flag === CellFlagEnum.EXCLAMATION) {
                    rowMatrix.push('!');
                } else if (cell.flag === CellFlagEnum.QUESTION) {
                    rowMatrix.push('?');
                }
            } else if (cell.state === CellStateEnum.OPEN) {
                if (cell.isMine) {
                    rowMatrix.push('*');
                } else {
                    rowMatrix.push(cell.numAdjacentMines);
                }
            }
        }

        return rowMatrix
    };

    let i,
        resultBoard = [],
        grid = board.grid();

    for (i = 0; i < board.numRows(); i++) {
        resultBoard.push(printRow(grid[i], i));
    }

    return resultBoard
};

module.exports = {
    newGame: newGame
}