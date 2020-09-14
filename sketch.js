var boyImage,boySprite,stoneObject,treeObject,mangoObject1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImage=loadImage("Plucking mangoes/boy.png")	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObject = new Stone(200,420,50,50);
	treeObject = new Tree(400,200,200,350);
	mangoObject1 = new Mango(400,250,40,40);
	mangoObject2 = new Mango(450,270,40,40);
	mangoObject3 = new Mango(400,280,40,40);
	mangoObject4 = new Mango(470,260,40,40);
	mangoObject5 = new Mango(405,250,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  image(boyImage,200,400,100,200);
  stoneObject.display();
  treeObject.display();
  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  detectCollision(stoneObject,mangoObject1);
  detectCollision(stoneObject,mangoObject2);
  detectCollision(stoneObject,mangoObject3);
  detectCollision(stoneObject,mangoObject4);
  detectCollision(stoneObject,mangoObject5);
  drawSprites();
 
}
function mouseDragged()
{
    Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    Stone.fly();
}
function detectCollision(lstone,lmango){
	MangoBodyPosition=lmango.body.position;
	StoneBodyPosition=lstone.body.position;
	var distance=dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y);
	if(distance <= lstone.r+lmango.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
  }

