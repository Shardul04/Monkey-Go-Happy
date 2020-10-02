
var player,player_running;
var banana,bananaimg,stoneimg,backgroundimg;
var stonegroup;
var background;
var score;
var invisibleground;
var stone,stonegroup;

function preload(){
  
backimg=loadImage ("jungle.jpg");
  stoneimg=loadImage("stone.png");
  player_running = loadAnimation  ("Monkey_01.png" ,"Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimg = loadImage ("banana.png");
  
}
function setup() {
  createCanvas(600, 400);
  
  background1 = createSprite( 500,200,1,200);
background1.addImage(backimg);
  background1.velocityX = -3;
  


  bananagroup = new Group();
stonegroup = new Group();

  
  player = createSprite(140,299,20,50);
  player.addAnimation ("running", player_running);
  player.scale = 0.2;  
  invisibleground = createSprite(140,360,930,10);
  invisibleground.visible = false;
  
    score = 0;
}

function draw() {
  background(220);
  
  if(player.isTouching(bananagroup)){
    score = score+10;
    bananagroup.destroyEach();
  }
  
    if(keyDown("space")) {
    player.velocityY = -15;
  }
  
  if(player.isTouching(stonegroup)){
    score=score-1;
  }
    switch(score){
      case 10:player.scale=0.12;
     break;
     case 20:player.scale=0.14;
     break;
     case 30:player.scale=0.16;
     break;
     case 40:player.scale=0.18;
     break;
     default:break;
    }
  

    player.velocityY = player.velocityY + 0.8
 
   if (background1.x < 120){
    background1.x = background1.width/2;
  }
  
   foods();
  spawnObstacles();
  
  player.collide(invisibleground);
  
  drawSprites();
  fill("red");
  text("score: "+ score, 120,50); 
  
}
function spawnObstacles() {
  if(frameCount % 129 === 0) {
    var stone = createSprite(800,345,10,40);
    stone.addImage(stoneimg);
     stone.velocityX = -4;
       //assign scale and lifetime to the stone           
    stone.scale = 0.2;
    stone.lifetime = 300;
    //add each stone to the group
      stonegroup. add (stone);
  }
}

function foods() {
  if(frameCount % 120 === 0) {
    var banana = createSprite(800,145,10,40);
    banana.addImage(bananaimg);
     banana.velocityX = -5.5;
       //assign scale and lifetime to the stone           
    banana.scale = 0.1;
    banana.lifetime = 300;
    //add each stone to the group
    bananagroup. add (banana);
  }
}
