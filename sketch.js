//Create variables here
var dog ,happyDog;
var database;
var foodS, foodStock;
var dogImage,hi;


function preload()
{
  //load images here
   dogImage = loadImage("images/dogImg.png");
   hi = loadImage("images/dogImg1.png");
}

function setup() {
  database= firebase.database();
  createCanvas(800, 700);
  dog = createSprite(400,350,30,30);
  dog.addImage(dogImage);
  dog.scale= 0.5;

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87) ;

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(hi)
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
if (x<=0){
  x=0;
}else{
  x=x-1;
}
  database.ref('/').update({
    Food:x
  })

}
