
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;

let plate1;
let plate2;

let rot1, rot2, rot3;

let angle1 = 90;
let angle2 = 45;
let angle3 = 135;

let angle_speed = 5;

let ball1, ball2, ball3, ball4, ball5;

function preload(){}

function setup() {
	createCanvas(400,400);

	engine = Engine.create();
	world = engine.world;

    let plate_options = {
		isStatic: true
	}


	let rotator_options = {
		isStatic: true
	}


	let ball_options = {
	   restitution: 0.95,
	}

	//Crie os Corpos aqui.

  plate1 = Bodies.rectangle(100,300,100,30,plate_options);
  World.add(world,plate1);

  plate2 = Bodies.rectangle(300,300,100,30,plate_options);
  World.add(world,plate2);

  rot1 = Bodies.rectangle(200,100,150,30,rotator_options);
  World.add(world,rot1);

  rot2 = Bodies.rectangle(200,100,150,30,rotator_options);
  World.add(world,rot2);

  rot3 = Bodies.rectangle(200,100,150,30,rotator_options);
  World.add(world,rot3);


  ball1 = Bodies.circle(75,0,20,ball_options);
  World.add(world,ball1);

  ball2 = Bodies.circle(125,0,20,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(175,0,20,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(225,0,20,ball_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(275,0,20,ball_options);
  World.add(world,ball5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  
  fill("blue");
 
  rect(plate1.position.x,plate1.position.y,100,10)
 
  rect(plate2.position.x,plate2.position.y,100,10)


  ellipse(ball1.position.x,ball1.position.y,20);

  ellipse(ball2.position.x,ball2.position.y,20);
  
  ellipse(ball3.position.x,ball3.position.y,20);
  
  ellipse(ball4.position.x,ball4.position.y,20);
  
  ellipse(ball5.position.x,ball5.position.y,20);


  Matter.Body.rotate(rot1,angle1);
  push();
  translate(rot1.position.x,rot1.position.y);
  rotate(angle1);
  rect(0,0,150,10)
  pop();
  angle1 += angle_speed;


  Matter.Body.rotate(rot2,angle2);
  push();
  translate(rot2.position.x,rot2.position.y);
  rotate(angle2 + 2);
  rect(0,0,150,10)
  pop();
  angle2 += angle_speed;


  Matter.Body.rotate(rot3,angle3);
  push();
  translate(rot3.position.x,rot3.position.y);
  rotate(angle3 + 1);
  rect(0,0,150,10)
  pop();
  angle3 += angle_speed;

  drawSprites();
}