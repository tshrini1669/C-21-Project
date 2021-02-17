var wall,thickness;
var bullet,speed,weight;
var pic1
function preload(){
  pic1=loadImage("Picture1.png");
}
function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
    bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor=color(225);
  bullet.addImage(pic1);
  bullet.scale=0.3;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0);
  
  if(wall.x-bullet.x<(bullet.width/2+wall.width)/2)
  {
    bullet.velocityX=0;  
    var deformation=0.5 * weight * speed * speed/25509;
    if(deformation>180){
    wall.shapeColor=color(255,0,0);
    }
    if(deformation<10){
      wall.shapeColor="red";
    }
    if(deformation>10){
      wall.shapeColor="lightgreen";
    }
  }











  drawSprites();
}