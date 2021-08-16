const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground1, ball, wall1, wall2;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//creating the bodies here 
	ground1 = new Ground(600,600, 1200, 20);
	wall1 = new Wall(1100, 660, 100, 10);
	wall2 = new Wall(1300, 600, 100, 10);
	ball1 = new Ball(400, 500, 20);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);

	Engine.update(engine);
	//displaying all the bodies
	ground1.display();
	wall1.display();
	wall2.display();
	//wall3.display();
	ball1.display();
}

//making the function for apply force 
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyforce(ball1.body. ball1.position, {x:15, y:-15});

}

}