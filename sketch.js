var movingRect,fixedRect;



function setup() {
  createCanvas(1000,800);
  movingRect = createSprite(400, 200, 50, 80);
  movingRect.shapeColor = "blue";

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
}

function draw() {
  background("black"); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;    
  
 /* if(movingRect.x - fixedRect.x === 50 || 
    fixedRect.x - movingRect.x === 50 ||
    movingRect.y - fixedRect.y === 80 || 
    fixedRect.y - movingRect.y === 80){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }*/


  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x <fixedRect.width/2 + movingRect.width/2  &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }  
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  drawSprites();
}