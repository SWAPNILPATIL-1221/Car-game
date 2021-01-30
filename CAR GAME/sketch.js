var car,wall
var speed,weight


function setup() {
createCanvas(1600,400); 
speed = random(55,90)
weight = random (400,1500)
car = createSprite(200,250,50,50)
wall = createSprite(1500, 200,60,800)
}

function draw() {
  background("black");  
  car.velocityX =speed; 
  if(car.isTouching(wall)){
   var d = 0.5*weight*speed*speed/22500
    car.collide(wall)
    car.velocityX = 0
    if(d<100){
    car.shapeColor= color(0,255,0)
    }
    else if(d> 100 && d<180){
      car.shapeColor= color(230,230,0)
    }
    else if (d>180){
      car.shapeColor= color(255,0,0)
    }
}
  drawSprites();
}