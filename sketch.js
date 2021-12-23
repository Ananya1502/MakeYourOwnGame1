var boyAnimation, boy, roadImg

function preload(){
  boyAnimation = loadAnimation(
    "assets/boyRunning0.png",
    "assets/boyRunning1.png",
    "assets/boyRunning2.png",
    "assets/boyRunning3.png",
    "assets/boyRunning4.png",
    "assets/boyRunning5.png",
    "assets/boyRunning6.png",
    "assets/boyRunning7.png",
    "assets/boyRunning8.png",
    "assets/boyRunning9.png",
    "assets/boyRunning10.png");

    roadImg = loadImage("pictures/road.jpg");
}



function setup() {
  createCanvas(800,400);
  boy = createSprite(400, 200, 10, 10);
  boy.addAnimation("running", boyAnimation);
  boy.scale = 0.3
}

function draw() {
  //background(255,255,255);
  background(roadImg);  
  drawSprites();
}