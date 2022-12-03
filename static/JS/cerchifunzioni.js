let ax = 0.01
let vx = 1
let x = 0

function setup() {
  createCanvas(400, 400);
  background(255,255,0);
}

function draw() {
  background(255,255,0)
  circle(x,200,50)
  circle(x,150,50)
  circle(x,50,50)
  circle(x,250,50)
  circle(x,100,50)
  circle(x,300,50)
  circle(x,350,50)
  fill(255,0,0)

  vx = vx + ax
  x = x + vx
  
  if(x >= 425){
    x = -25
  }
}