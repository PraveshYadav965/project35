var database,foodStock,dog,dogImage,dogImage1,dog1;
var food;
var gameState = "end";


function preload()
{
  
  dogImage = loadImage("images/dogImg.png");
  dogImage2 = loadImage("images/dogImg1.png");  
}

function setup()
{
 database=firebase.database();
  console.log(database);

  createCanvas(800, 700);

  dog = createSprite(650,350,20,20);
  dog.addImage("hello",dogImage);
  dog.scale = 0.3;

  dog1 = createSprite(650,350,20,20);
  dog1.addImage("he4llo",dogImage2);
  dog1.scale = 0.3;

  


  foodStock=database.ref('Food'); 
  foodStock.on("value",readStock); 
  
}


function draw() 
{  
  background(46, 139, 87);
  if (keyDown(UP_ARROW)&&gameState ==="end") {
   
    dog.visible = false;
    dog1.visible = true;
 

    writeStock(food);
  } else{
    
    dog1.visible = false;
    dog.visible = true;
    gameState=== "false";
  }


push();
  textSize(30);
  fill(0);
  text (" score : " + food,50,50);
pop();

  drawSprites();
 

}
function readStock(data)
{
  
    food=data.val();
    console.log(food);
   
}
function writeStock(x) 
{
    
    if (x <= 0) {
      x = 20;
    } else {
      x = x-1;
    }
    database.ref('/').update({
    Food : x,});
}
