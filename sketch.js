


//Create namespace for Engine
const Engine=Matter.Engine;
//Create namespace for World
const World=Matter.World;
//Create namespace for Bodies
const Bodies=Matter.Bodies;
//Create namespace for Body
var engine,world,ball,ground;

var arrowbtn,blade2,blade3;
var blade,angle=40,angle2=50;

function setup() {
  createCanvas(400,400);
//create the engine
engine = Engine.create();
  //Add world to the engine
  world=engine.world;

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
ground = Bodies.rectangle(200,390,400,20,ground_options);
//add to world
World.add(world,ground);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  arrowbtn=createImg('up.png');
  arrowbtn.position(330,30);
  arrowbtn.size(50,50);
  arrowbtn.mouseClicked(giveforce);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);

  blade = Bodies.rectangle(200,330,80,20,ground_options);
  World.add(world,blade);
  blade2 = Bodies.rectangle(90,330,80,20,ground_options);
  World.add(world,blade2);

 blade3= new Blade(280,200,10,70);

}


function draw() 
{
  background("cyan");
  Engine.update(engine);
  

  fill("blue")

  ellipse(ball.position.x,ball.position.y,20);
  
  fill("red")
  //write a rectangle function to display ground.
 rect(ground.position.x,ground.position.y,400,20);

/*fill("purple")
Matter.Body.rotate(blade2,angle2);
push();
translate(blade2.position.x,blade2.position.y);
rotate(angle2);
rect(0,0,80,20)
pop();
 angle2=angle2+0.2;

  fill("orange")
Matter.Body.rotate(blade,angle);
console.log(blade.position.x,blade.position.y);
console.log(blade);
push();
translate(300,350);
rotate(angle);
rect(0,0,80,20);
pop();
  angle=angle+0.2;*/

  fill("black")
blade3.Show();

}

function giveforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
