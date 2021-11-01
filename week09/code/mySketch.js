console.log("hello javascript!");

// Michelle's neat sketch!
// https://openprocessing.org/sketch/1333353

let array = [];
let savedTime = 0; 
let timerLength = 2000;
let obj;
let obj2;

function setup(){
    console.log("hello p5.js!");
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
	savedTime = millis();
	frameRate(5);
	
	obj = new Circle(width/2,height/2,200,0,HALF_PI,0,0,0);
	obj2 = new Circle(width/2,height/2,500,0,QUARTER_PI,0,0,0);
	
	for (let i = 0; i < 5; i++) {
		array.push(new Circle(width/2,height/2,random(200,800),0,random(0,PI),random(360),40,99));
	}
    // createCanvas(500,500);
    // background(200,200,200);
}

function draw(){
    // ellipse(mouseX,mouseY, 50,50);
    background(0);

	for(let i = 0; i < array.length; i++) {
		array[i].display();
	}

	if (millis() >= savedTime + timerLength) {
		for(let i = 0; i < array.length; i++) {
			array[i].update();
		}
	}
}

class Circle {
	constructor(incX, incY, incRad, incStartPos, incEndPos, incH, incS, incB) {
		this.xPos = incX;
		this.yPos = incY;
		this.rad = incRad;
		this.startPos = incStartPos;
		this.endPos = incEndPos;
		this.hue = incH;
		this.sat = incS;
		this.bght = incB;
	}
	
	display() {
		push();
		noStroke();
		fill(this.hue,this.sat,this.bght);
		arc(this.xPos,this.yPos,this.rad,this.rad,this.startPos,this.endPos);
		pop();
	}
	
	update() {
		this.startPos = lerp(this.startPos, this.startPos + HALF_PI, 0.25);
		this.endPos = lerp(this.endPos, this.endPos + HALF_PI, 0.25);
	}

}