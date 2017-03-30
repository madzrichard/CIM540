var circle;
var fullWaves;
var whiteMask;
var sun;

var counter1 = -285;
var counter2 = 230;

var showLogo = false;

var waveFrameAmounts = 5;
var waveFrameArray = [];
var currentFrame = 0;

var interval = 1000;
var pMillis = 0




function preload() {
  for (var waveFrames = 0; waveFrames < waveFrameAmounts; waveFrames++) {
    var waveFrameString = "pngs/waves" + waveFrames + ".png";
    waveFrameArray[waveFrames] = loadImage(waveFrameString);
  }

}


function setup() {
	createCanvas(400, 400);
	circle = loadImage("pngs/circle.png");
	fullWaves = loadImage("pngs/fullwaves.png");
	whiteMask = loadImage("pngs/whitemask.png");
	sun = loadImage("pngs/sun.png");
}



function draw() {
	background(255);

	image(circle, 0, counter1, 398, 398);
	if (counter1 <= 0) {
		counter1 = counter1 + 3;
	}
	
	if(showLogo == false){
	image(fullWaves, 0, counter2, 400, 400);
	}
	
	if (counter2 >= 55 && counter1 > -20) {
		counter2 = counter2 - 3;
	} 
	
	if(counter2 == 53){
		showLogo = true;
	}


	if (showLogo == true) {
		
		image(waveFrameArray[currentFrame], 0, 0, 400, 400);
	
		if(millis()-pMillis >= interval){
	  	currentFrame++; // Next frame
		pMillis = millis();
		}
		
		if (currentFrame == waveFrameArray.length) {
    	currentFrame = 4;
  		}
	
		image(whiteMask, -.7, 0, 400, 400);
	}

}
