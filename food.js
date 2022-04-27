
//class for food and such
class Food{
    constructor(){

        this.pos = {
            x:Math.floor(Math.random() * gridWidth),
            y:Math.floor(Math.random() * gridHeight)
            
        }


    }

    update(){
        this.pos.x = Math.floor(Math.random() * gridWidth);
        this.pos.y = Math.floor(Math.random() * gridHeight);
    }


    draw(){
        fill(255, 0, 0, 200);
        rect(this.pos.x*width/gridWidth, this.pos.y*height/gridHeight, width / gridWidth, height / gridHeight);

    }


}