//put images/ before each png
var cat,catImg
var mouse,mouseImg
var catRunning
var gardenImg
var catImg2
var catImg4
function preload() {    
    //load the images here
catImg=loadImage("images/cat1.png")
mouseImg=loadImage("images/mouse1.png")
gardenImg=loadImage("images/garden.png")
catRunning=loadAnimation("images/cat2.png","images/cat3.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(600,600,30,30)   
mouse=createSprite(300,600,30,30)

cat.addImage(catImg)

mouse.addImage(mouseImg)
cat.scale=0.10
mouse.scale=0.09
}
function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
  
   
   
    keyPressed()
    if(cat.x-mouse.x<(cat.width/2+mouse.width/2)){
        cat.velocityX=0
 
    }
        drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
    cat.velocityX=-5;
    

}   
}




