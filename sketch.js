x = 0;
y = 0;

let tiles = [];

function preload(){
  atlas = loadImage("assets/wallBot.png");
}

function setup() {
  createCanvas(400, 400);
  tiles = deAtlas(atlas, 1, 1, 16, 16)
}

function draw() {
  noSmooth();
  scale(20.0)
  background(220);
  displayTileSet(16, 16)
  fill(0,0,255);
  mp = new Pos(mouseX, mouseY);
  circle(mp.x, mp.y, 50);
  circPos = new Pos(mp.x, mp.y)
  circ = new BoxCollider(circPos, 100, 50);
  circ.debugDraw();
  x+=1;
  y+=1;
  let p = new Pos(300, 300)
  let c = new BoxCollider(p, 50, 100);
  c.debugDraw();
  if (c.Collide(circ)){
    console.log("collide");
  } 
}