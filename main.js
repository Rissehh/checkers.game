//Board function to create a new board
function Board() {
  this.grid = [];

  // Initialize the grid with empty positions
  for (var i = 0; i < 8; i++) {
    this.grid[i] = [];
    for (var j = 0; j < 8; j++) {
      this.grid [i][j] = null;
    }
  }
}

// Define the Piece object constructor
function Piece(color, type) {
  this.color = color;
  this.type = type;
}

//#region // Define a method for placing a Piece on the Board
Board.prototype.placePiece = function (piece, x, y) {
  this.grid[x][y] = piece;
};

Board.prototype.removePiece = function (x, y) {
  this.grid[x][y] = null;
};
//#endregion

// Create a new Board object
var board = new Board();

//#region // Create some Piece objects, assign a color and status
var redpiece = "red";
var blackpiece = "black";


//#endregion

//#region // Place the Piece objects on the Board
board.placePiece(redpiece, 0, 0);
board.placePiece(redpiece, 0, 2);
board.placePiece(redpiece, 0, 4);
board.placePiece(redpiece, 0, 6);
board.placePiece(redpiece, 1, 1);
board.placePiece(redpiece, 1, 3);
board.placePiece(redpiece, 1, 5);
board.placePiece(redpiece, 1, 7);
board.placePiece(redpiece, 2, 0);
board.placePiece(redpiece, 2, 2);
board.placePiece(redpiece, 2, 4);
board.placePiece(redpiece, 2, 6);

board.placePiece(blackpiece, 5, 1);
board.placePiece(blackpiece, 5, 3);
board.placePiece(blackpiece, 5, 5);
board.placePiece(blackpiece, 5, 7);
board.placePiece(blackpiece, 6, 0);
board.placePiece(blackpiece, 6, 2);
board.placePiece(blackpiece, 6, 4);
board.placePiece(blackpiece, 6, 6);
board.placePiece(blackpiece, 7, 1);
board.placePiece(blackpiece, 7, 3);
board.placePiece(blackpiece, 7, 5);
board.placePiece(blackpiece, 7, 7);


//#endregion

//sets id as a variable to temporarily reference "a1" resolving backgroundColor reference errors.
//This variable is used to hold previously clicked element
let id = document.getElementById("a1")
var visualGrid = document.getElementsByTagName("td");         //sets up the 


//#region /create ids for each place on the board
let a1 = document.getElementById("a1");
let a3 = document.getElementById("a3");
let a5 = document.getElementById("a5");
let a7 = document.getElementById("a7");

let b2 = document.getElementById("b2");
let b4 = document.getElementById("b4");
let b6 = document.getElementById("b6");
let b8 = document.getElementById("b8");

let c1 = document.getElementById("c1");
let c3 = document.getElementById("c3");
let c5 = document.getElementById("c5");
let c7 = document.getElementById("c7");

let d2 = document.getElementById("d2");
let d4 = document.getElementById("d4");
let d6 = document.getElementById("d6");
let d8 = document.getElementById("d8");

let e1 = document.getElementById("e1");
let e3 = document.getElementById("e3");
let e5 = document.getElementById("e5");
let e7 = document.getElementById("e7");

let f2 = document.getElementById("f2");
let f4 = document.getElementById("f4");
let f6 = document.getElementById("f6");
let f8 = document.getElementById("f8");

let g1 = document.getElementById("g1");
let g3 = document.getElementById("g3");
let g5 = document.getElementById("g5");
let g7 = document.getElementById("g7");

let h2 = document.getElementById("h2");
let h4 = document.getElementById("h4");
let h6 = document.getElementById("h6");
let h8 = document.getElementById("h8");
//#endregion

//#region //add red pieces to the red side
a1.classList.add("red");
a3.classList.add("red");
a5.classList.add("red");
a7.classList.add("red");

b2.classList.add("red");
b4.classList.add("red");
b6.classList.add("red");
b8.classList.add("red");

c1.classList.add("red");
c3.classList.add("red");
c5.classList.add("red");
c7.classList.add("red");

//add black pieces to the black side
f2.classList.add("black");
f4.classList.add("black");
f6.classList.add("black");
f8.classList.add("black");

g1.classList.add("black");
g3.classList.add("black");
g5.classList.add("black");
g7.classList.add("black");

h2.classList.add("black");
h4.classList.add("black");
h6.classList.add("black");
h8.classList.add("black");
//#endregion

//#region //adds click listeners to squares in HTML
a1.addEventListener("click", onclick);
a3.addEventListener("click", onclick);
a5.addEventListener("click", onclick);
a7.addEventListener("click", onclick);

b2.addEventListener("click", onclick);
b4.addEventListener("click", onclick);
b6.addEventListener("click", onclick);
b8.addEventListener("click", onclick);

c1.addEventListener("click", onclick);
c3.addEventListener("click", onclick);
c5.addEventListener("click", onclick);
c7.addEventListener("click", onclick);

d2.addEventListener("click", onclick);
d4.addEventListener("click", onclick);
d6.addEventListener("click", onclick);
d8.addEventListener("click", onclick);

e1.addEventListener("click", onclick);
e3.addEventListener("click", onclick);
e5.addEventListener("click", onclick);
e7.addEventListener("click", onclick);

f2.addEventListener("click", onclick);
f4.addEventListener("click", onclick);
f6.addEventListener("click", onclick);
f8.addEventListener("click", onclick);

g1.addEventListener("click", onclick);
g3.addEventListener("click", onclick);
g5.addEventListener("click", onclick);
g7.addEventListener("click", onclick);

h2.addEventListener("click", onclick);
h4.addEventListener("click", onclick);
h6.addEventListener("click", onclick);
h8.addEventListener("click", onclick);
//#endregion


//Processes functions when a certain square is clicked
//In theory - we should click a piece. The spot should become highlighted and possible moves become highlighted. 
//Another click then takes place to move the piece to the new square

function onclick(event) {          
  unhighlight();                            //unhighlights last clicked piece
  this.style.backgroundColor = "grey";      //this highlights the clicked square
  
  //event.target.classList.remove("red","black")              //removes piece

  CheckLegalMove(event);

  //Move(x, y);       //calls the move function which just removes the clicked piece from the JS grid


}

// this resets the playing field black after every click
function unhighlight() {
  for (var i = 0; i < visualGrid.length; i++) {

    var td = visualGrid[i];
    
    if (td.getAttribute("data-row") % 2 == 1) {        //makes even rows and columns black
      if (td.getAttribute("data-column") % 2 == 1) {
        td.style.backgroundColor = "black";
      }
    }
    
    if (td.getAttribute("data-row") % 2 == 0) {        //makes odd rows and columns black
      if (td.getAttribute("data-column") % 2 == 0) {
        td.style.backgroundColor = "black";
      }
    }
  }
}

function CheckLegalMove(event) {
  let currentRow = parseInt(event.target.dataset.row);          //clicked row
  let currentColumn = parseInt(event.target.dataset.column);    //clicked column
  color = board.grid [currentRow][currentColumn]                //uses above to find the color of the piece inside the board array

  if (color == "red") {                                        
    var righsquare = document.querySelectorAll('[data-row="' + (currentRow+1) + '"][data-column="' + (currentColumn+1) + '"]');   //red grabs forward a row and left
    var leftsquare = document.querySelectorAll('[data-row="' + (currentRow+1) + '"][data-column="' + (currentColumn-1) + '"]');  //red grabs forward a row and right
    
    if (board.grid[currentRow+1][currentColumn+1] == null) {   //checks if the forward right position is empty
      righsquare.forEach(function(element) {                   //needed a for each function to work - not sure why
        element.style.backgroundColor = "lightblue";           //change to blue
      });
      righsquare.forEach(function(element) {
        element.addEventListener('click', function() {
          // Place the piece in the clicked square
          board.placePiece(redpiece, currentRow+1, currentColumn+1);
          board.removePiece(currentRow, currentColumn);
          let clickedElement = document.querySelector('[data-row="' + (currentRow+1) + '"][data-column="' + (currentColumn+1) + '"]');
          let oldElement = document.querySelector('[data-row="' + (currentRow) + '"][data-column="' + (currentColumn) + '"]');
          clickedElement.classList.add("red");
          oldElement.classList.remove("red");
        });
      });
      
    } else if (board.grid[currentRow+1][currentColumn+1] == "black") {
      if (board.grid[currentRow+2][currentColumn+2] == null) {   //checks if the next right position is empty to get ready to jump over
        righsquare = document.querySelectorAll('[data-row="' + (currentRow+2) + '"][data-column="' + (currentColumn+2) + '"]');   //red grabs forward 2 rows and left 2
        righsquare.forEach(function(element) {                   //needed a for each function to work - not sure why
          element.style.backgroundColor = "lightblue";           //change to blue
        });
      }
    }
    

    if (board.grid[currentRow+1][currentColumn-1] == null) {   //checks if the forward left position is empty
      leftsquare.forEach(function(element) {                   //needed a for each function to work - not sure why
        element.style.backgroundColor = "lightblue";           //change to blue
      });
      leftsquare.forEach(function(element) {
        element.addEventListener('click', function() {
          // Place the piece in the clicked square
          board.placePiece(redpiece, currentRow+1, currentColumn-1);
          board.removePiece(currentRow, currentColumn);
          let clickedElement = document.querySelector('[data-row="' + (currentRow+1) + '"][data-column="' + (currentColumn-1) + '"]');
          let oldElement = document.querySelector('[data-row="' + (currentRow) + '"][data-column="' + (currentColumn) + '"]');
          clickedElement.classList.add("red");
          oldElement.classList.remove("red");
        });
      });
    } else if (board.grid[currentRow+1][currentColumn-1] == "black") {
      if (board.grid[currentRow+2][currentColumn-2] == null) {   //checks if the next left position is empty to get ready to jump over
        leftsquare = document.querySelectorAll('[data-row="' + (currentRow+2) + '"][data-column="' + (currentColumn-2) + '"]');   //red grabs forward 2 rows and left 2
        leftsquare.forEach(function(element) {                   //needed a for each function to work - not sure why
          element.style.backgroundColor = "lightblue";           //change to blue
        });
      }
    }
  }


  if (color == "black") {                               
    var leftsquare = document.querySelectorAll('[data-row="' + (currentRow-1) + '"][data-column="' + (currentColumn+1) + '"]');   //black grabs down a row and right
    var rightsquare = document.querySelectorAll('[data-row="' + (currentRow-1) + '"][data-column="' + (currentColumn-1) + '"]');  //black grabs down a row and right
    
    if (board.grid[currentRow-1][currentColumn+1] == null) {    //checks if the backward left position is empty
      leftsquare.forEach(function(element) {                    //needed a for each function to work - not sure why
        element.style.backgroundColor = "lightblue";            //change to blue
      });
    } else if (board.grid[currentRow-1][currentColumn+1] == "red") {
      if (board.grid[currentRow-2][currentColumn+2] == null) {   //checks if the next left position is empty to get ready to jump over
        leftsquare = document.querySelectorAll('[data-row="' + (currentRow-2) + '"][data-column="' + (currentColumn+2) + '"]');   //red grabs forward 2 rows and left 2
        leftsquare.forEach(function(element) {                   //needed a for each function to work - not sure why
          element.style.backgroundColor = "lightblue";           //change to blue
        });
      }
    } 

    if (board.grid[currentRow-1][currentColumn-1] == null) {    //checks if the backward right position is empty
      rightsquare.forEach(function(element) {                   //needed a for each function to work - not sure why
        element.style.backgroundColor = "lightblue";            //change to blue
      });
    } else if (board.grid[currentRow-1][currentColumn-1] == "red") {
      if (board.grid[currentRow-2][currentColumn-2] == null) {   //checks if the next right+ position is empty to get ready to jump over
        rightsquare = document.querySelectorAll('[data-row="' + (currentRow-2) + '"][data-column="' + (currentColumn-2) + '"]');   //red grabs backward 2 rows and right 2
        rightsquare.forEach(function(element) {                  //needed a for each function to work - not sure why
          element.style.backgroundColor = "lightblue";           //change to blue
        });
      }
    } 
  }
}

function highlightLegalMove() {


}

// function Move(currentRow, currentColumn) {
//   board.removePiece(currentRow, currentColumn);
// }
