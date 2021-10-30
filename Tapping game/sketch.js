var MC
var shopOwner
var mcIMG, shopOwnerIMG, bgIMG
function preload(){
mcIMG = loadImage("MainCharacter.png")
shopOwnerIMG = loadImage("ShopOwner.png")
bgIMG = loadImage("bgImg.jpg")
}


function setup(){
createCanvas(windowWidth,windowHeight)
MC = createSprite(500,height-300,20,20)
MC.addImage(mcIMG)
MC.scale = .5
shopOwner = createSprite(250,height-300,20,20)
shopOwner.addImage(shopOwnerIMG)
shopOwner.scale = .48
}

function draw(){
background(bgIMG)
if(keyIsDown(UP_ARROW) && MC.y>height/2){
    MC.y = MC.y-10
} 
if(keyIsDown(DOWN_ARROW) && MC.y<height-90){
    MC.y = MC.y+10
}     
if(keyIsDown(LEFT_ARROW) && MC.x>30){
    MC.x = MC.x-10
}      
if(keyIsDown(RIGHT_ARROW) && MC.x<width-30){
    MC.x = MC.x+10
}
drawSprites();
}