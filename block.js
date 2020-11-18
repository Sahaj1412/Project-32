class Block{
    constructor(x,y){
        var options ={
            friction: 1,
            density: 0.5,
            restitution: 0
        }
        this.block = Bodies.rectangle(x,y,5,15,options);
        World.add(world, this.block);
    }
    display(){
        if(this.body.speed < 3){
            var angle = this.block.angle;
        
        rotate(angle);
        translate(this.block.position.x, this.block.position.y);
        rectMode(CENTER);
        rect(0,0, 200, 20);
        }
        else{
            push();
            World.remove(world, this.body);
            this.visibility = this.visibility -5;
            pop();
        }
    }
    score(){
        if(this.visibility < 0 && this.visibility >-105){
            score++;
        }
    }
}