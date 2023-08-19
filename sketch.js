
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var engine
var world

function preload(){
}
	

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	var ball_options={		
		//isStatic:false
		restitution:0.3
		//friction:0
		//density:1.2
	
	}
	//Create the Bodies Here.
	ball=Bodies.circle(200,200,20)
	World.add(world,ball)
	
	ellipseMode(RADIUS)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //groundObj.display()
  ground.show
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 
}



