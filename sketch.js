
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint
var gr1,c1,c2,c3,c4,c5,ing,chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

gr1=new Ground(width/2,200,300,10)
ing=new Ground(450,550,370,10)
c1=new Circle(410,500,20)
c2=new Circle(450,500,20)
c3=new Circle(420,500,20)
c4=new Circle(425,500,20)
c5=new Circle(430,500,20)
chain1=new Chain(gr1.body,c1.body)
chain2=new Chain(gr1.body,c2.body)
chain3=new Chain(gr1.body,c3.body)
chain4=new Chain(gr1.body,c4.body)
chain5=new Chain(gr1.body,c5.body)
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(225);
  gr1.display()
  c1.display()
  c3.display()
  c4.display()
  c5.display()
  c2.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
 // ing.display()
  //ing.visible=false;
  drawSprites();
 
}



