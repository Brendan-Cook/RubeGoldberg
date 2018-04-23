# RubeGoldberg
This game allows the player to make their own rube goldberg machine
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

function setup() {
  createCanvas(1520,730);




}

function draw() {
  console.log(slope);
  background(225);


  for (let i = 0; i < slope.length; i++) {
  	    slope[i].drawRamp();
        slope[i].moveRamp();
        slope[i].keyTyped();

  	  }


  }


function keyPressed(){
  if (keyCode === 49){
  let r = new Ramp(100,100,50);
  slope.push(r);

  }
}

class Ramp {
  constructor(x,y,rampWidth){
  	this.x = x;
    this.y = y;
  }
    drawRamp(){
      strokeWeight(10);
      noFill();
      rect(this.x, this.y, rampWidth);
  }

    moveRamp(){
      this.x = mouseX;
      this.y = mouseY;
  }
    keyTyped(){
      if (key === 'a'){
      rampWidth = rampWidth - 5;
      } else if (key === 'd'){
        rampWidth = rampWidth + 5
    }
  }
}
