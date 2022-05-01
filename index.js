
const gridWidth = 21;
const gridHeight = 21;


let snake = new Snake;
let food = new Food;

function setup(){
    //arbitrary square measurement
    createCanvas(600, 600);
    //setting framerate to 4
   // frameRate(4);
//calling snake constructor(see snake.js)


}



function draw(){
    //alpha set to add crappy blur
    background(10, 50);
    //adding lines to make reference work simpler
    //could be done in one statement but doesn't work for modified canvas size
    // i is one for borderless nonsense

    stroke(50);
    for(var i = 1; i < gridHeight; i++){
        line(0, height/gridHeight * i, width, height / gridHeight * i)
    }
    for(var i = 1; i < gridWidth; i++){
        line(width / gridWidth * i, 0, width / gridWidth * i, height);
    }

    snake.update();
    snake.draw();
    food.draw();
    //collisions with food
    if(snake.body[0].x == food.pos.x && snake.body[0].y == food.pos.y){
        food.update();
        snake.grow();
    
    }
    

}

