// 1) make simple vertical marble maze
// 2) add aditional pieces one by one
// 3) add rube goldberg aspect, so the machine does something
// 4) add multiple marbles/have other objects that can run the machine
// 5) make it customizable
// 6) add ability to upload to server
// 7) attempt to make 3d?
let slope = [];
let r;
let rampWidth = 50;
let rampAngle = 0;
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
        slope[i].moveRamp();
        slope[i].keyTyped();
  	  }
  for (let a = 0; a < marble.length; a++) {
        marble[a].drawBall();
  }
}

function keyPressed(){
  if (keyCode === 49){
  loop();
  let r = new Ramp(0,0,50); //when 1 is pressed, create a ramp
  slope.push(r);
  } else if
    (keyCode === 13){
      let b = new Ball(0,0); //when enter is pressed, start the ball
      marble.push(b);
  } else if
    (keyCode === 32){
      rect(0, 0, rampWidth, 15);
      noLoop();
  }
}


class Ramp {
  constructor(x,y,rampWidth){
  	this.x = x;
    this.y = y;
  }
    drawRamp(){
      translate(this.x, this.y);
      strokeWeight(2);
      noFill();
      rotate(rampAngle);
      rect(0, 0, rampWidth, 15);
  }

    moveRamp(){
      this.x = mouseX;
      this.y = mouseY;
  }
    keyTyped(){
      if (key === 'a'){
      rampWidth = rampWidth - 2.5;
      }
      else if (key === 'd'){
        rampWidth = rampWidth + 2.5;
      }
      else if (key === 'w'){
        rampAngle = rampAngle + 3;
      }
      else if (key === 's'){
        rampAngle = rampAngle - 3;
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
    moveBall(){
      this.bally = this.bally + 5;
      if (this.bally >= this.y && this.ballx <= 200){
        this.bally = this.bally - 5;
        this.ballx = this.ballx + 5;
    }
  }
 }
