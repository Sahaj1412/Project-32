const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand1, stand2;
var block1, block2, block3, block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon_img;
var polygon;
var score = 0;

function preload(){
    polygon_img = loadImage("hexagon.png")
}

function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground();
    block1 = new Block(300,225,30,40);
    block2 = new Block(330,225,30,40);
    block3 = new Block(360,225,30,40);
    block4 = new Block(390,225,30,40);
    block5 = new Block(420,225,30,40);
    block6 = new Block(450,225,30,40);
    block7 = new Block(480,225,30,40);

    block8 = new Block(330,225,30,40);
    block9 = new Block(360,225,30,40);
    block10 = new Block(390,225,30,40);
    block11 = new Block(420,225,30,40);
    block12 = new Block(450,225,30,40);

    block13 = new Block(360,225,30,40);
    block14 = new Block(390,225,30,40);
    block15 = new Block(420,225,30,40);

    block16 = new Block(390,225,30,40);

    block17 = new Block(640,225,30,40);
    block18 = new Block(670,225,30,40);
    block19 = new Block(700,225,30,40);
    block20 = new Block(730,225,30,40);
    block21 = new Block(760,225,30,40);

    block22 = new Block(670,225,30,40);
    block23 = new Block(700,225,30,40);
    block24 = new Block(730,225,30,40);

    block25 = new Block(700,225,30,40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, ball);

    slingshot = new SlingShot(this.ball,{x:100, y:200});
}

function draw() {
    textSize(18);
    fill(0);
    text("Score: "+score,750,40);
    stand1.display();
    stroke(1);
    strokeWeight(15);
    fill("lightblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();
    fill("lightblue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("turquoise");
    block22.display();
    block23.display();
    block24.display();
    fill("pink");
    block25.display();
    fill("gold");
    imageMode(CENTER);
    image(polygon_img,ball.position.x, ball.position.y, 40, 40);
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    
    block13.score();
    block14.score();
    block15.score();
    
    block16.score();
    
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    
    block22.score();
    block23.score();
    block24.score();
    
    block25.score();
    slingshot.score();
}

function MouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});
}

function MouseReleased(){
    slingshot.fly();
}

if(keyCode === 32){
    slingshot.attach(this.polygon);
}