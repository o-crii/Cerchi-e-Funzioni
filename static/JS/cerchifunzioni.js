let ax = 0.01
let vx = 1
let x = 0
let ay = -0.01
let vy = 1 
let h = 400
let y = h/2

function setup() {
  createCanvas(400, 400);
  background(255,255,0);
}

function draw() {
  background(255,255,0)
  circle(x,200,50)
  fill(255,0,0)


  vx = vx + ax
  vy = vy + ay

  x = x + vx
  y = y + vy

  if(x >= 425){
    x = -25
  } else if (x <= -25) {
    x = 425
  }

  if (y >= 425){
    y = -25
  } else if (-25) {
    y = 425
  }
}



let accx= document.querySelector("[name=acceX]")
let accy= document.querySelector("[name=acceY]")


accx.addEventListener("input", function(e){
  ax = parseFloat(accx.value);
  })

accy.addEventListener("input", function(e){
  ay = parseFloat(accy.value);
  })