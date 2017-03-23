var frameAmounts = 4;
var frameArray = [];
var currentFrame = 0;

var interval = 1000;
var pMillis = 0

function preload() {
  for (var frames = 0; frames < frameAmounts; frames++) {
    var frameString = "assests/Thatwasclose" + frames + ".jpg";
    frameArray[frames] = loadImage(frameString);
  }
}

function setup() {
  createCanvas(500, 500);
  frameRate(30);
}

function draw() {
	
	image(frameArray[currentFrame], 0, 0);
	
//	console.log(millis());
	if(millis()-pMillis >= interval){
	  currentFrame++; // Next frame
		pMillis = millis();
	}
 
  if (currentFrame == frameArray.length) {
    currentFrame = 0;
    // Return to first frame
  }
}
