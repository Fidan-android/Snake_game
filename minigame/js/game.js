let canvas = document.getElementById("game");
let spaceGame = canvas.getContext("2d");
let gameField = new Image();
let foodItem = new Image();
let box = 32; // height and width of 1 square
let userScore = 0;
let game = setInterval(drawObjects, 100); // Calling function
let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box
};
let snake = [];
let dir;
let headColor = "green";
let bodyColor = "yellow";
let failWindow = document.getElementById("failWindow");

document.addEventListener("keydown", direction)

gameField.src = "img/gameBg.png";
foodItem.src = "img/food.png";


// Min width of snake in center of game field

snake[0] = {
    x: 9 * box,
    y: 10 * box
};

function direction(event){
    if (event.keyCode == 37 && dir != "right")
        dir = "left";
    else if (event.keyCode == 38 && dir != "down")
        dir = "up";
    else if (event.keyCode == 39 && dir != "left")
        dir = "right";
    else if (event.keyCode == 40 && dir != "up")
        dir = "down";
}

function eatTail(head, arr){
   for (let i = 0; i < arr.length; i++){
       if (head.x == arr[i].x && head.y == arr[i].y)
           clearInterval(game);
   }
}

function drawObjects(){
    spaceGame.drawImage(gameField, 0,0);
    spaceGame.drawImage(foodItem, food.x, food.y);
    // Drawing snake
    for (let i = 0; i < snake.length; i++){
        spaceGame.fillStyle = i == 0 ? headColor : bodyColor;
        spaceGame.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // Write score
    spaceGame.fillStyle = "white";
    spaceGame.font = "40px Arial";
    spaceGame.fillText(userScore, box * 2.5, box * 1.6);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeX == food.x && snakeY == food.y){
        userScore++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        };
    } else {
        snake.pop();
    }

    if (snakeX < box || snakeX > box * 17
        || snakeY < 3 * box || snakeY > box * 17) {
            clearInterval(game);
            failWindow.style.display = "block";
            document.getElementById("userRecord").innerHTML = userScore;
    }


    if (dir == "left")
        snakeX -= box;
    if (dir == "right")
        snakeX += box;
    if (dir == "up")
        snakeY -= box;
    if (dir == "down")
        snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    eatTail(newHead, snake);

    snake.unshift(newHead);
}






