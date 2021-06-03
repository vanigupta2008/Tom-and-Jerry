var bgImg , background 
var  catImg, catImg2, catImg3, cat 
var mouseImg, mouseImg2, mouseImg3, mouse 




function preload() 
{
    //load the images here
    bgImg = loadImage ("garden.png");
    catImg=loadAnimation("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    mouseImg=loadAnimation("mouse4.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    catImg3= loadAnimation("cat4.png");
    mouseImg3= loadAnimation("mouse1.png")

}

function setup()
{
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(200,200);
    cat.addAnimation("catImg");

    mouse = createSprite(120,120);
    mouse.addAnimation("mouseImg");

}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide
  keyPressed();
    if ( cat.x-mouse.y < (mouse.width+cat.width)/2)
    {
        mouse.addAnimation("mouseHappy", mouseImg3);
        mouse.changeAnimation("mouseHappy");

        cat.addAnimation("catHappy", catImg3);
        cat.changeAnimation("catHappy");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===RIGHT_ARROW)
  {
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay= 25;
  }
  
if (keyCode === LEFT_ARROW)
{
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");
    cat.velocityX= -4;
}

}
