x = 0;
y = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
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
