// 1) make simple vertical marble maze
// 2) add aditional pieces one by one
// 3) add rube goldberg aspect, so the machine does something
// 4) add multiple marbles/have other objects that can run the machine
// 5) make it customizable
// 6) add ability to upload to server
// 7) attempt to make 3d?
let slope = [];
let r;


let marble = [];
let b;

function setup() {
  createCanvas(1520,730);
  angleMode(DEGREES);
  rectMode(CENTER);

}

function draw() {
  console.log(slope);
  background(225);

  for (let i = 0; i < slope.length; i++) {
  	    slope[i].drawRamp();
        slope[i].keyTyped();
  	  }

  for (let a = 0; a < marble.length; a++) {
        marble[a].drawBall();
  }

  function keyPressed(){
    if (keyCode === 13){
    let b = new Ball(0,0);
    }
  }

  }
function mousePressed(){
  let r = new Ramp(mouseX,mouseY,100,180);
  slope.push(r);
}


function keyPressed(){
  if (keyCode === 13){
  let b = new Ball(0,0);
  marble.push(b);
  }

}


class Ramp {
  constructor(x,y,rampWidth,rampAngle){
  	this.x = x;
    this.y = y;
    this.rampWidth = rampWidth;
    this.rampAngle = rampAngle;
  }
    drawRamp(){
      strokeWeight(2);
      noFill();
      push();
      translate(this.x, this.y);
      rotate(this.rampAngle);
      rect(0, 0, this.rampWidth, 15);
      pop();
  }

    keyTyped(){
      // if the mouse is hovering over the ramp that you want to adjust
      if(mouseX >= this.x-this.rampWidth/2 && mouseX <= this.x+this.rampWidth/2 && mouseY >= this.y-7 && mouseY <=this.y+7){

        if (key === 'a'){
         this.rampWidth = this.rampWidth - 2.5;
        }
        else if (key === 'd'){
          this.rampWidth = this.rampWidth + 2.5;
        }
        else if (key === 'w'){
          this.rampAngle = this.rampAngle + 3;
        }
        else if (key === 's'){
          this.rampAngle = this.rampAngle - 3;
       }
      }
  }
}

 class Ball{
   constructor(x,y){
     this.x = x;
     this.y = y;
   }
    drawBall(){
      translate(this.x, this.y);
      fill('BLUE');
      ellipse(0, 0, 20, 20);
    }


 }
