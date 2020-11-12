var wall,car;
var speed,weight;

function setup() {
  createCanvas(800,400);
  speed = random (-55,90);
  weight = random (400,1500);
  car  = createSprite (780,200,20,20);
  wall = createSprite (10,200,60,height/2);
  console.log (car.position.x);
}

function draw() {
  background(0);  
  car.velocityX = speed;
  wall.shapeColor = (80,80,80)

if(wall.x-car.x <(car.width+wall.width)/2){
  car.velocityX  =  0;
  wall.velocityX =  0;
  var Deformation = 0.5*weight*speed*speed/22500
  if(Deformation > 180){
    car.shapeColor = (225,0,0);
    wall.shapeColor = (225,0,0);
  }
  if(Deformation < 180 && Deformation > 100 ){
    car.shapeColor = (230,230,0);
    wall.shapeColor = (230,230,0);
  }
  if(Deformation < 100 ){
    car.shapeColor = (0,225,0);
    wall.shapeColor = (0,225,0);
  }

}
  drawSprites();
} 