
var trex ,trex_running;
var ground, groundimage;
function preload(){
  trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png")
  groundimage = loadImage ("ground2.png")



}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite (50,160,20,50)
  trex.scale = 0.5
  trex.addAnimation("trex_running",trex_running)
  ground = createSprite (200,180,400,20)
  ground.addImage("ground",groundimage)

}

function draw(){
  background("white")
  ground.velocityX = -2
  if  (ground.x < 0) {
    ground.x = ground.width / 2
  }
  if (keyDown("space")) {
    trex.velocityY = trex.velocityY -10
  }
  trex.velocityY = trex.velocityY + 0.8
  trex.collide (ground)
  drawSprites ()

  

}
