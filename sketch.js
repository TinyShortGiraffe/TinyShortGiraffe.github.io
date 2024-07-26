x = 0;
y = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0,0,255);
  circle(x, y, 50);
  circPos = new Pos(x, y)
  circ = new CircleCollider(50, circPos);
  circ.debugDraw();
  x+=1;
  y+=1;
  let p = new Pos(300, 300)
  let c = new CircleCollider(50, p);
  c.debugDraw();
  if (c.Collide(circ)){
    console.log("collide");
  } 
}
