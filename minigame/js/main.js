window.onload = function() {
    function setColorHead() {
        headColor = this.value;
    }

    function setTailColor(){
        bodyColor = this.value;
    }

    let butHead = document.getElementsByClassName("but");
    for (let i = 0; i < butHead.length; i++) {
        butHead[i].onclick = setColorHead;
    }

    let butTail = document.getElementsByClassName("butTail");
    for (let i = 0; i < butTail.length; i++) {
        butTail[i].onclick = setTailColor;
    }
}

let gameDiv = document.getElementById("game-main-block");
let descriptionDiv = document.getElementById("about");

function showAbout(){
    gameDiv.style.display = "none";
    descriptionDiv.style.display = "block";
}

function restartGame() {
    failWindow.style.display = "none";
    userScore = 0;
    snake = [];
    snake[0] = {
        x: 9 * box,
        y: 10 * box
    };
    dir = "";
    game = setInterval(drawObjects, 100);
}

