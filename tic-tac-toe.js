window.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");    //game board element
    const squares = board.querySelectorAll("div");
    const statusDiv =document.getElementById("status");

    squares.forEach(function(square) {
        square.classList.add("square");
         
    });// Loop through each div and add the square class
    
    let PlayerTurn = true; // Tracks which player turn is it.

    const gamestatus = Array(9).fill(null); //tracks the current state of the gameboard.
    let gameOver = false;
    
    const winningCombinations = [
        [0, 1, 2], //top row
        [3, 4, 5], //middle row
        [6, 7, 8], //bottom row
        [0, 3, 6], //left column
        [1, 4, 7], //middle column
        [2, 5, 8], //right column
        [0, 4, 8], //diagonal top-left to bottom-right
        [2, 4, 6]  //diagonal top-right to bottom-left
    ];
    
    function winnerchecker(){
        for (let combination of winningCombinations) {
            const[a,b,c]= combination;
            if (gamestatus[a] && gamestatus[a] === gamestatus[b] && gamestatus[a] === gamestatus[c]){
                return gamestatus[a];
            }
    }
        return null;
    }

    squares.forEach(function(square, index) {
        square.addEventListener("click", function(){
            if (gamestatus[index] !==null) return; //ignores the click, if square is filled.  
            const symbol = PlayerTurn? "X" : "O";
            square.textContent = symbol;
            square.classList.add(symbol);
            gamestatus[index] = symbol;
        
    const winner = winnerchecker();
        if (winner) {
            statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
            statusDiv.classList.add("you-won");
            gameOver = true;
        } else {
            PlayerTurn = !PlayerTurn;
        }
        });

        square.addEventListener("mouseenter", function(){
            square.classList.add("hover");
});
            square.addEventListener("mouseleave", function(){
            square.classList.remove("hover");
});
    }); //Add listeners for each square.
});
