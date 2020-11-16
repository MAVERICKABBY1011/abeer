
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	tree1=newTree(x,y,)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



