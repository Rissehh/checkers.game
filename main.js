// Define the Board object constructor
function Board()
{
    this.grid = [];
 
        // Initialize the grid with empty positions
        for (var i = 0; i < 8; i++)
        {
        this.grid[i] = [];
        for (var j = 0; j < 8; j++)
        {
        this.grid[i][j] = null;
        }
    }
}
 
// Define a method for placing a Piece on the Board
Board.prototype.placePiece = function(piece, x, y)
{
this.grid[x][y] = piece;
};
 
// Create a new Board object
var board = new Board();

// Create some Piece objects
var Redpiece1 = new Piece("Red", "pawn");
var Redpiece2 = new Piece("Red", "pawn");
var Redpiece3 = new Piece("Red", "pawn");
var Redpiece4 = new Piece("Red", "pawn");
var Redpiece5 = new Piece("Red", "pawn");
var Redpiece6 = new Piece("Red", "pawn");
var Redpiece7 = new Piece("Red", "pawn");
var Redpiece8 = new Piece("Red", "pawn");
var Redpiece9 = new Piece("Red", "pawn");
var Redpiece10 = new Piece("Red", "pawn");
var Redpiece11 = new Piece("Red", "pawn");
var Redpiece12 = new Piece("Red", "pawn");

var blackpiece1 = new Piece("black", "pawn");
var blackpiece2 = new Piece("black", "pawn");
var blackpiece3 = new Piece("black", "pawn");
var blackpiece4 = new Piece("black", "pawn");
var blackpiece5 = new Piece("black", "pawn");
var blackpiece6 = new Piece("black", "pawn");
var blackpiece7 = new Piece("black", "pawn");
var blackpiece8 = new Piece("black", "pawn");
var blackpiece9 = new Piece("black", "pawn");
var blackpiece10 = new Piece("black", "pawn");
var blackpiece11 = new Piece("black", "pawn");
var blackpiece12 = new Piece("black", "pawn");
 
 
// Place piece on board
board.placePiece(Redpiece1, 1, 1);
board.placePiece(Redpiece2, 1, 3);
board.placePiece(Redpiece3, 1, 5);
board.placePiece(Redpiece4, 1, 7);
board.placePiece(Redpiece5, 2, 2);
board.placePiece(Redpiece6, 2, 4);
board.placePiece(Redpiece7, 2, 6);
board.placePiece(Redpiece8, 2, 8);
board.placePiece(Redpiece9, 3, 1);
board.placePiece(Redpiece10, 3, 3);
board.placePiece(Redpiece11, 3, 5);
board.placePiece(Redpiece12, 3, 7);

board.placePiece(blackpiece1, 6, 2);
board.placePiece(blackpiece2, 6, 4);
board.placePiece(blackpiece3, 6, 6);
board.placePiece(blackpiece4, 6, 8);
board.placePiece(blackpiece5, 7, 1);
board.placePiece(blackpiece6, 7, 3);
board.placePiece(blackpiece7, 7, 5);
board.placePiece(blackpiece8, 7, 7);
board.placePiece(blackpiece9, 8, 2);
board.placePiece(blackpiece10, 8, 4);
board.placePiece(blackpiece11, 8, 6); 
board.placePiece(blackpiece12, 8, 8);

 
// Define the Piece object constructor
function Piece(color, type)
{
this.color = color;
this.type = type;
}
 
// Define the move method for the Piece object
Piece.prototype.move = function(x, y)
{

// Code for moving the piece to position (x, y)
};

let table = document.querySelector('table')


table.addEventListener