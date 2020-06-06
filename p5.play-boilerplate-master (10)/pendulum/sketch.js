const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ball1,box1;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  ball1 = new Ball (200,100,20);
  box1 = new Box (300,380,80,80)
  world = engine.world;
  var options={
    bodyA:ball1.body,
    bodyB:box1.body,
    length:160,
    stiffness:0.04
    
    }
    chain=Constraint.create(options);
    World.add(world,chain);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  box1.display();
ball1.display();
strokeWeight(3);
stroke(&quot;white&quot;);
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
    this.chain.bodyB.position.x,this.chain.bodyB.position.y);
  drawSprites();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
  }
}