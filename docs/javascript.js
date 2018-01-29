var player;

function setup() {
  createCanvas(720,480);
  frameRate(30);
  //playerImage = loadImage("imgs/snake30.png");



  player = createSprite(width/2, height/2);
  player.setCollider("circle", 0, 0, 30);
  //player.addImage("normal", playerImage);


  
}
function draw() {
  background(255,255,205);
  if(keyDown(LEFT_ARROW) && (player.position.x - player.width/2) >=0){
    player.position.x -= 9;
  }
  if(keyDown(RIGHT_ARROW)&& (player.position.x + player.width/2) <= width)
    player.position.x += 9;
  if(keyDown(UP_ARROW) && (player.position.y - player.height/2) >= 0)
    player.position.y -= 6;
  if(keyDown(DOWN_ARROW) && (player.position.y + player.height/2) <= height)
    player.position.y += 6;


  fallingGroup = new Group();
  if(frameCount%60 == 0){
    for(var i = 0; i <12; i++){
      fallingGroup.add(createFallingBalls(random(720)));
    }
  }
  for(var i = 0; i<fallingGroup.length; i++)
  {
    if(fallingGroup[i].position.y >= height)
    {
      fallingGroup[i].remove();
    }
  }
  drawSprites();
}

function createFallingBalls(x){
  var b = createSprite(x, 0);
  //var img = loadImage("imgs/snake.png");
  //b.addImage(img);
  b.setSpeed(random(6)+5, 90);
  b.scale= random(2)/10 + 0.08;
  b.setCollider("circle", 0, 0, 10);
  return b;
}