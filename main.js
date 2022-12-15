//Board function to create a new board
function Board() {
    this.grid = [];
 
    // Initialize the grid with empty positions
    for (var i = 0; i < 8; i++) {
        this.grid[i] = [];
        for (var j = 0; j < 8; j++) {
        this.grid[i][j] = null;
        }
    }
}

// Define the Piece object constructor
function Piece(color, type) {
    this.color = color;
    this.type = type;
    }
   

// Define a method for placing a Piece on the Board
Board.prototype.placePiece = function(piece, x, y) {
this.grid[x][y] = piece;
};
 
// Create a new Board object
var board = new Board();

// Create some Piece objects, assign a color and status
var redpiece1 = new Piece("red", "pawn");
var redpiece2 = new Piece("red", "pawn");
var redpiece3 = new Piece("red", "pawn");
var redpiece4 = new Piece("red", "pawn");
var redpiece5 = new Piece("red", "pawn");
var redpiece6 = new Piece("red", "pawn");
var redpiece7 = new Piece("red", "pawn");
var redpiece8 = new Piece("red", "pawn");
var redpiece9 = new Piece("red", "pawn");
var redpiece10 = new Piece("red", "pawn");
var redpiece11 = new Piece("red", "pawn");
var redpiece12 = new Piece("red", "pawn");

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

 
// Place the Piece objects on the Board
board.placePiece(redpiece1, 0, 0);
board.placePiece(redpiece2, 0, 2);
board.placePiece(redpiece3, 0, 4);
board.placePiece(redpiece4, 0, 6);
board.placePiece(redpiece5, 1, 1);
board.placePiece(redpiece6, 1, 3);
board.placePiece(redpiece7, 1, 5);
board.placePiece(redpiece8, 1, 7);
board.placePiece(redpiece9, 2, 0);
board.placePiece(redpiece10, 2, 2);
board.placePiece(redpiece11, 2, 4);
board.placePiece(redpiece12, 2, 6);

board.placePiece(blackpiece1, 5, 1);
board.placePiece(blackpiece2, 5, 3);
board.placePiece(blackpiece3, 5, 5);
board.placePiece(blackpiece4, 5, 7);
board.placePiece(blackpiece5, 6, 0);
board.placePiece(blackpiece6, 6, 2);
board.placePiece(blackpiece7, 6, 4);
board.placePiece(blackpiece8, 6, 6);
board.placePiece(blackpiece9, 7, 1);
board.placePiece(blackpiece10, 7, 3);
board.placePiece(blackpiece11, 7, 5);
board.placePiece(blackpiece12, 7, 7);



//sets id as a variable to temporarily reference "a1" resolving backgroundColor reference errors.
//This variable is used to hold previously clicked element
var id = document.getElementById("a1")

const RedPiece = new Image(50, 50);
const BlackPiece = new Image(50, 50);
RedPiece.src = "https://cdn0.iconfinder.com/data/icons/board-games-flat-1/48/Games_BoardGames_Artboard_14-512.png";
BlackPiece.src = "https://cdn0.iconfinder.com/data/icons/board-games-colored-1/48/Games_BoardGames_Artboard_15-512.png";



//adds click listeners to squares in HTML
document.getElementById("a1").addEventListener("click", stuff);
document.getElementById("a3").addEventListener("click", stuff);
document.getElementById("a5").addEventListener("click", stuff);
document.getElementById("a7").addEventListener("click", stuff);

document.getElementById("b2").addEventListener("click", stuff);
document.getElementById("b4").addEventListener("click", stuff);
document.getElementById("b6").addEventListener("click", stuff);
document.getElementById("b8").addEventListener("click", stuff);

document.getElementById("c1").addEventListener("click", stuff);
document.getElementById("c3").addEventListener("click", stuff);
document.getElementById("c5").addEventListener("click", stuff);
document.getElementById("c7").addEventListener("click", stuff);

document.getElementById("d2").addEventListener("click", stuff);
document.getElementById("d4").addEventListener("click", stuff);
document.getElementById("d6").addEventListener("click", stuff);
document.getElementById("d8").addEventListener("click", stuff);

document.getElementById("e1").addEventListener("click", stuff);
document.getElementById("e3").addEventListener("click", stuff);
document.getElementById("e5").addEventListener("click", stuff);
document.getElementById("e7").addEventListener("click", stuff);

document.getElementById("f2").addEventListener("click", stuff);
document.getElementById("f4").addEventListener("click", stuff);
document.getElementById("f6").addEventListener("click", stuff);
document.getElementById("f8").addEventListener("click", stuff);

document.getElementById("g1").addEventListener("click", stuff);
document.getElementById("g3").addEventListener("click", stuff);
document.getElementById("g5").addEventListener("click", stuff);
document.getElementById("g7").addEventListener("click", stuff);

document.getElementById("h2").addEventListener("click", stuff);
document.getElementById("h4").addEventListener("click", stuff);
document.getElementById("h6").addEventListener("click", stuff);
document.getElementById("h8").addEventListener("click", stuff);

document.getElementById("a1").appendChild(RedPiece);
document.getElementById("h2").appendChild(BlackPiece);



//Highlights clicked squares
function stuff() {
    unhighlight()
    this.style.backgroundColor = 'grey'

    id = this
}



// the highlight function will take an element as an argument
function unhighlight() {
    id.style.backgroundColor = 'black'
}

function CheckLegalMove() {
   
}

function Move() {
   
}


// for (var i in grid, :



// // // Define the move method for the Piece object
// // Piece.prototype.move = function(x, y)
// // {

// // // Code for moving the piece to position (x, y)
// // };