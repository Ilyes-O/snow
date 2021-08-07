const Engine = Matter.Engine
const World= Matter.World
const Bodies = Matter.Bodies;

var engine, world
var bg
var snow,snow2,snow3,snow4,snow5,snow6,snow7;
var cat, catImg1, catImg2

var person;

function preload(){
  bg = loadImage("images/snow1.jpg")
  walk = loadAnimation("images/image1.png","images/image2.png","images/image3.png")
  image1 = loadAnimation("images/image1.png")
  image2 = loadAnimation("images/image2.png")
  image3 = loadAnimation("images/image1.png")
} 

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

  person = createSprite(20,340,20,20);
  person.addAnimation("walk",image1,image2,image3);

  ground = new Ground(600,height,1200,20);
  snow = new Snow(random(0,800),20,70,70)
  snow2 = new Snow(random(0,800),40,70,70)
  snow3 = new Snow(random(0,800),20,70,70)
  snow4 = new Snow(random(0,800),40,70,70)
  snow5 = new Snow(random(0,800),20,70,70)
  snow6 = new Snow(random(0,800),40,70,70)
  snow7 = new Snow(random(0,800),20,70,70)
}

function draw() {
  background(bg); 
  Engine.update(engine) 
  snow.display()
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  ground.display();

  drawSprites();
}