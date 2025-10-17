window.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");    //game board element

    const squares = board.querySelectorAll("div");

    squares.forEach(function(square) {
        square.classList.add("square");
    });// Loop through each div and add the square class

});