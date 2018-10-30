const minesweeper = require('minesweeper');

const BoardStateEnum = minesweeper.BoardStateEnum;
const CellStateEnum = minesweeper.CellStateEnum;
const CellFlagEnum = minesweeper.CellFlagEnum;
const Board = minesweeper.Board;
const Cell = minesweeper.Cell;


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
    if (!gameSettings.hasOwnProperty(level)) {
        let responseObject = {
            status: 400,
            body: null
        }
    } else {
        let mineArray = minesweeper.generateMineArray(gameSettings.level);
        board = new Board(mineArray);
    }
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