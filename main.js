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
let id = document.getElementById("a1")


//create ids for each place on the board
let a1 = document.getElementById("a1")
let a3 = document.getElementById("a3")
let a5 = document.getElementById("a5")
let a7 = document.getElementById("a7")

let b2 = document.getElementById("b2")
let b4 = document.getElementById("b4")
let b6 = document.getElementById("b6")
let b8 = document.getElementById("b8")

let c1 = document.getElementById("c1")
let c3 = document.getElementById("c3")
let c5 = document.getElementById("c5")
let c7 = document.getElementById("c7")

let d2 = document.getElementById("d2")
let d4 = document.getElementById("d4")
let d6 = document.getElementById("d6")
let d8 = document.getElementById("d8")

let e1 = document.getElementById("e1")
let e3 = document.getElementById("e3")
let e5 = document.getElementById("e5")
let e7 = document.getElementById("e7")

let f2 = document.getElementById("f2")
let f4 = document.getElementById("f4")
let f6 = document.getElementById("f6")
let f8 = document.getElementById("f8")

let g1 = document.getElementById("g1")
let g3 = document.getElementById("g3")
let g5 = document.getElementById("g5")
let g7 = document.getElementById("g7")

let h2 = document.getElementById("h2")
let h4 = document.getElementById("h4")
let h6 = document.getElementById("h6")
let h8 = document.getElementById("h8")

//add red pieces to the red side
a1.classList.add("red")
a3.classList.add("red")
a5.classList.add("red")
a7.classList.add("red")

b2.classList.add("red")
b4.classList.add("red")
b6.classList.add("red")
b8.classList.add("red")

c1.classList.add("red")
c3.classList.add("red")
c5.classList.add("red")
c7.classList.add("red")


//add black pieces to the black side
f2.classList.add("black")
f4.classList.add("black")
f6.classList.add("black")
f8.classList.add("black")

g1.classList.add("black")
g3.classList.add("black")
g5.classList.add("black")
g7.classList.add("black")

h2.classList.add("black")
h4.classList.add("black")
h6.classList.add("black")
h8.classList.add("black")


//adds click listeners to squares in HTML
a1.addEventListener("click", stuff);
a3.addEventListener("click", stuff);
a5.addEventListener("click", stuff);
a7.addEventListener("click", stuff);

b2.addEventListener("click", stuff);
b4.addEventListener("click", stuff);
b6.addEventListener("click", stuff);
b8.addEventListener("click", stuff);

c1.addEventListener("click", stuff);
c3.addEventListener("click", stuff);
c5.addEventListener("click", stuff);
c7.addEventListener("click", stuff);

d2.addEventListener("click", stuff);
d4.addEventListener("click", stuff);
d6.addEventListener("click", stuff);
d8.addEventListener("click", stuff);

e1.addEventListener("click", stuff);
e3.addEventListener("click", stuff);
e5.addEventListener("click", stuff);
e7.addEventListener("click", stuff);

f2.addEventListener("click", stuff);
f4.addEventListener("click", stuff);
f6.addEventListener("click", stuff);
f8.addEventListener("click", stuff);

g1.addEventListener("click", stuff);
g3.addEventListener("click", stuff);
g5.addEventListener("click", stuff);
g7.addEventListener("click", stuff);

h2.addEventListener("click", stuff);
h4.addEventListener("click", stuff);
h6.addEventListener("click", stuff);
h8.addEventListener("click", stuff);



//Highlights clicked squares
function stuff(event) {
    unhighlight()
    this.style.backgroundColor = 'grey'
    id = this
    console.log(event.target.dataset.row)
    let x = parseInt(event.target.dataset.row)
    console.log
    console.log(event.target.dataset.colume)
    let y = parseInt(event.target.dataset.colume)
    console.log
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