var moving_rect, fixed_rect
var r1, r2

function setup() {
  createCanvas(1200,800);
  moving_rect = createSprite(400, 200, 80, 30);
  fixed_rect = createSprite(200, 400, 30, 80);
  r1 = createSprite(600, 100, 50, 20);
  r2 = createSprite(600, 600, 20, 50);


  r1.shapeColor = "white"
  r2.shapeColor = "white"

  moving_rect.shapeColor = "green"
  fixed_rect.shapeColor = "green"

 r1.velocityY = 4
 r2.velocityY = -4

}

function draw() {
  background(0);
  
  moving_rect.x = mouseX
  moving_rect.y = mouseY

  bounceOff(r1, r2);
  drawSprites();
}

