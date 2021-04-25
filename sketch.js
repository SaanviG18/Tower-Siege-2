const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2, ground, engine, world, ball, polygonImage, s1;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18

function preload(){
polygonImage = loadImage("hexagon.png");

}
function setup(){
createCanvas(900,400);
engine= Engine.create();
world= engine.world
Engine.run(engine)

//objects
ground = new Ground(450,395,900,10);
stand1 = new Ground(270,350,160,10);
stand2 = new Ground(560,210,160,10);
polygon = new Polygon(100,200,40);
    //first group
       //bottom
block1 = new Box(210,325,30,40);
block2 = new Box(240,325,30,40);
block3 = new Box(270,325,30,40);
block4 = new Box(300,325,30,40);
block5 = new Box(330,325,30,40);
      //middle
block6 = new Box(240,285,30,40);
block7 = new Box(270,285,30,40);
block8 = new Box(300,285,30,40);
      //top
block9 = new Box(270,245,30,40);

    //second group
      //bottom
block10 = new Box(500,185,30,40);
block11 = new Box(530,185,30,40);
block12 = new Box(560,185,30,40);
block13 = new Box(590,185,30,40);
block14 = new Box(620,185,30,40);
      //middle
block15 = new Box(530,145,30,40);
block16 = new Box(560,145,30,40);
block17 = new Box(590,145,30,40);
     //top
block18 = new Box(560,105,30,40);

s1 = new Compy(polygon.body,{x:100, y:200});

}
function draw(){
Engine.update(engine);
background("lightGreen");
ground.display();
stand1.display();
stand2.display();
polygon.display();
fill("lightPink");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
fill("lightBlue");
block6.display();
block7.display();
block8.display();
fill("lightPink");
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
fill("lightBlue");
block15.display();
block16.display();
block17.display();
fill("lightPink");
block18.display();
s1.display();
}


function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
 
function mouseReleased(){
s1.fly();
}
function keyPressed(){
if(keyCode===32){
s1.attach(polygon.body);
}
}


