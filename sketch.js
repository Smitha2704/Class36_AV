var canvas, backgroundImage;

var form, player, game;
var gameState=0;
var playerCount = 0;

var database;



function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game=new Game();
  game.getState();
  game.start();
 
}


function draw(){

}
