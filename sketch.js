var form1,game1,player1;
var database;
var gameState,playerCount,allPlayers
var plant1,plant2,plant3,plant4,plant5;
var zombie1,zombie2,zombie3,zombie4,zombie5;
var plants=[]
var zombies=[]

function preload() {
  bg=loadImage("img/bg.jpeg")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  // createSprite(400, 200, 50, 50);
 database=firebase.database();

 game1=new Game()
 game1.getState();
 game1.start();
}
function draw() {
  background("white");  
if (playerCount===5) {
  game1.update(1)
}
if (gameState===1) {
  game1.play()
}

}