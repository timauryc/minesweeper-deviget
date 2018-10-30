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
    let mineArray = minesweeper.generateMineArray(gameSettings.level);
    board = new Board(mineArray);
}


function printBoard() {
    let i,
        resultBoard = [],
        grid = board.grid();

    for (i = 0; i < board.numRows(); i++) {
        resultBoard.push(printRow(grid[i], i));
    }

    console.log(resultBoard[0][2])
};