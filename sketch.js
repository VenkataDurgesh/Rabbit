var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var appleimage;
var orangeleaves;
var orangelleavesimage;
var redleaves;
var redleavesimage;
var applegroup;
var score;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimage = loadImage("apple.png");
  orangeleavesimage = loadImage("orangeleaf.png");
  redleavesimage = loadImage("redimage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
applegroup=new Group()

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=mouseX;
  var rand=Math.round(random(1,3));
  if (rand===1) {
    createapples();
  }
  if(rand===2) {
    createredleaves();
  }
  if (rand===3) {
    createorangeleaves();
  }
  drawSprites();
}
function createapples() {
  if (frameCount%80===0) {
    var apple=createSprite(10,0,10,10);
    apple.addImage(appleimage);
    apple.scale=0.1;
    apple.velocityY=10;
    apple.x=random(50,350)
    applegroup.add(apple);
  }
}
  function createorangeleaves() {
    if (frameCount%80===0) {
      var orangeleaves=createSprite(10,0,10,10);
      orangeleaves.addImage(orangeleavesimage)
      orangeleaves.scale=0.1;
      orangeleaves.velocityY=10;
      orangeleaves.x=random(50,350)
    }
  }
    function createredleaves() {
      if (frameCount%80===0) {
        var redleaves=createSprite(10,0,10,10);
        redleaves.addImage(redleavesimage);
        redleaves.scale=0.1;
        redleaves.velocityY=10;
        redleaves.x=random(50,350)
      }

    }