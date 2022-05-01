class Snake{
    constructor(){
        //0 = up, 1 = right, 2 = down, 3 = left
        this.sleepTime = 0;
        //time in *frames* before the snake moves
        //why is this a variable it's only called once
       this.updateDelay = 5;
         //defining x, y, and dir of the head
         this.dir = 1;
        this.body = [{
            x:10,
             y:10,
            },
          // //position 2 for bugchecking
          // {
          //   x:9,
          //   y:10,
          // },
          // {
          //   x:8,
          //   y:10,

          // }
          ];
          //alive or dead
          this.alive = true;
        this.updateHead = function(x, y){
             //moving head forwards
            //taking last thing in the array and inseting at beginning
            //but adding x to one
      
            // I don't know why I must use an identical object for this to work instead of just referencing the object at index 0 directly
            
            //I wish I could just store the dir in each object and push it along, the array, and move by changing index 0's dir
            //no clue why above doesn't work
            for(var i = 1; i < this.body.length; i ++){
              if(this.body[0].x + x == this.body[i].x && this.body[0].y + y == this.body[i].y){
                this.alive = false;

              }

            }
         //edge warping mechanic
            if(this.body[0].x > gridWidth){
              this.body[0].x = 0;
            }
            if(this.body[0].y > gridWidth){
              this.body[0].y = 0;
            }
            if(this.body[0].x < 0){
              this.body[0].x = gridWidth;
            }
            if(this.body[0].y < 0){
              this.body[0].y = gridHeight;


            }
         //drawing a new segment in whatever direction the snake is going
            this.body.splice(0, 0, {
              x:this.body[0].x + x,
              y:this.body[0].y + y
            }
              );
              
            
            //booting to prevent unlimited growth
              this.body.pop();
        }
        

    }


    draw(){
        //scaling up and rendering each square
      for(var i = 0; i < this.body.length; i++){
        if(i == 0){
          fill(0, 255, 0, 100)

        } else{


        fill(20, 200, 20, 100)
        }
        rect(this.body[i].x * width / gridWidth, this.body[i].y * height/gridHeight, width/gridWidth, height/gridHeight);
      }  
      
      //changing the direction of the head based on keycode
      if(keyIsPressed){
        //if dir != is to keep the snake from collapsing upon itself and destroying the spce time continuum
      switch(keyCode){
          //up
        case 38:
          if(this.dir != 2){
        this.dir = 0;
          }
        break;
        case 39:
        //right
        if(this.dir != 3){
        this.dir = 1;
        }
        break;
        case 40:
        //down
        if(this.dir != 0){
        this.dir = 2;
        }
        break;
        case 37:
        //left
        if(this.dir != 1){
        this.dir = 3;
        }
        break;
      }
    }

    //if any of the segments minus the head has the same coords as the head, restart
    if(!this.alive){
      this.body = [{
        x:10,
        y:10

      }]
      this.alive = true;
      this.dir = 1;



    }

  }
       //this is the most incredibly jank method of doing delay I'm incredibly sorry
       //when setting the framerate to 4, you must be holding the key on frame, so this is the solution
    update(){

      //transferring the movement along the body
      this.sleepTime++;
      if(this.sleepTime > this.updateDelay){
      this.sleepTime = 0;
        if(this.alive){
        //actually moving it
      switch(this.dir){
        case 0:
          this.updateHead(0, -1);
        break;
        case 1:
          this.updateHead(1, 0);
        break;
        case 2:
         this.updateHead(0, 1)
        break;
        case 3:
         this.updateHead(-1, 0)
        break;
      }
    }
    }
    }
    
    
    grow(){
      this.body.push(this.body[this.body.length-1]);

    }


  }
        




