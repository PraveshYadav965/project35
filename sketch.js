
//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dog1;
var database;
function preload(){
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");


}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog1 = createSprite(250,300,100,100);
  dog1.addImage(dog);
  dog1.scale=0.2

}


function draw() {  

  background(46, 139, 87);

  //add styles here
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog1.addImage(happyDog);
  }
  
  drawSprites();
  stroke(1);
  fill("Black");
  textSize(20);
  text("Note: Press UP_ARROW Key to feed Drago Milk",50,30);
  text("Food remaining: "+foodS,100,100);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}