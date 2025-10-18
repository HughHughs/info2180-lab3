window.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");    //game board element

    const squares = board.querySelectorAll("div");

    squares.forEach(function(square) {
        square.classList.add("square");
         
    });// Loop through each div and add the square class
    
    let PlayerTurn = true; // Tracks which player turn is it.

    const gamestatus = Array(9).fill(null); //tracks the current state of the gameboard.

    squares.forEach(function(square, index) {

    square.addEventListener("click", function(){
         
    if (gamestatus[index] !==null) return; //ignores the click, if square is filled.
        
    const symbol = PlayerTurn? "X" : "O";
        
    square.textContent = symbol;
        square.classList.add(symbol);
        
        gamestatus[index] = symbol;
        
        PlayerTurn =!PlayerTurn;

        });

        square.addEventListener("mouseenter", function(){
            square.classList.add("hover");
});
            square.addEventListener("mouseleave", function(){
            square.classList.remove("hover");
});
    }); //Add listeners for each square.
});
