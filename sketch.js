var fixedRect, movingRect;
var go1, go2, go3, go4;

function setup() {
  createCanvas(1200,800);
 /* fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true; 
  go3=createSprite(450,500,50,40);
  go3.shapeColor="yellow"
  go4=createSprite(300,600,30,10);
  go4.shapeColor="yellow"
  */
 go1=createSprite(400,100,50,80);
  go1.shapeColor="yellow"
  go2=createSprite(400,800,50,40);
  go2.shapeColor="yellow"
 go1.velocityY=5;
 go2.velocityY=-5;
}

function draw() {
  background(255,255,255);  
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,go2)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
 */
bounceoff(go1,go2)

  drawSprites();
}


