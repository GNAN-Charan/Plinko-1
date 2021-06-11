const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisons = [];
var divisonsHeight = 300;
var particles = [];
var plinkos = []; 
function preload()
{
	
}



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);

  
  for (var i = 0; i<=width; i= i+80) {
      divisons.push(new Divisions(i,height-divisonsHeight/2, 10, divisonsHeight));
  }

  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 50));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,135));
  }
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,225));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,325));
  }

  

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  for (var n = 0; n<divisons.length; n++) {
    divisons[n].display();
  }

  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  }

  ground.display();
}