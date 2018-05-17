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
let starX = random(20,1500);
let starY = random(75,700);
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
        marble[a].moveBall();
  }

  rect(100,400,200,20);
  rect(starX, starY, 40, 40);
  rotate(45);
  rect(starX, starY, 40, 40);

}


function keyPressed(){
  if (keyCode === 13){
    let b = new Ball(0,0);
    marble.push(b);
  } else if (keyCode === 49){
    let r = new Ramp(mouseX,mouseY,100,180);
    slope.push(r);
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
      ellipse(0,0,15,15);
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
     this.ballx = x;
     this.bally = y;
   }
    drawBall(){
      fill('BLUE');
      ellipse(this.ballx + 20, this.bally, 20, 20);
    }
    moveBall(){
      this.bally = this.bally + 5;
      if (this.bally >= 400 && this.ballx <= 200){
        this.bally = this.bally - 5;
        this.ballx = this.ballx + 5;
    }
  }
}
