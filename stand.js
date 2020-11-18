class Stand{
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.stand = Bodies.rectangle(x,y,200,20,options);
        World.add(world, this.stand);
    }
    display(){
        var angle = this.stand.angle;
        push();
        rotate(angle);
        translate(this.stand.position.x, this.stand.position.y);
        rectMode(CENTER);
        rect(0, 0, 200, 20);
        pop();
    }
}