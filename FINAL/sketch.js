//Want to change song & fill color of ellipse when you click (to go through 3 songs)
//do I need two arrays one for colors and one for songs
//need to load all songs first
//also need to track the amount of mouseclicks 
//make the ellipses pngs of maybe snow or something like that 

var rain = [];
var sound = [];
var amplitude;
var cnv;
var level;
var spread;
var pill;

function preload(){
    sound = [loadSound('assets/happy_little_pill.mp3'), loadSound('assets/amber.mp3'), loadSound('assets/faded.mp3')]; 
}



function setup() {
  cnv = createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 100; i++) {
    rain.push(new Drop(random(0, windowWidth), random(0, windowHeight), random(1, 3)));
  }
	
	amplitude = new p5.Amplitude();

  cnv.mouseClicked(function() {
    if (sound[0].isPlaying() ){
	    sound[0].stop();
        sound[1].play();
    }else if(sound[1].isPlaying() ){
		sound[1].stop();
		sound[2].play();
	}else if(sound[2].isPlaying() ){
		sound[2].stop();
	}else {
      sound[0].play();
  	}
  });
	  
}

function draw() {
  fill(0, 25);
  rect(0, 0, width, height);
  for (var i = 0; i < rain.length; i++) {
    rain[i].displ();
  }
	
  level = amplitude.getLevel();
  spread = map(level, 0, 1, 0, 100);
  textSize(15);
  text("Move Mouse Back and Forth to Change Falling Speed",60,windowHeight - 50,400,100);
}

function Drop(x, y, sp) {
  var x1 = x;
  var y1 = y;
  var x2;
  var y2;
  var sp;

  this.displ = function() {
    var mx = mouseX / 100;
    if (mx <= 0) {
      mx = 0.05;
    }
    y1 = y1 + sp * mx;
    x2 = x1;
    y2 = y1 + 50;
	
	fill(random(12,30),random(20,40),random(100,150));
	ellipse(x1,y1,spread,spread);

    if (y1 >= windowHeight - 95) {
      fill(random(12,30),random(20,40),random(100,150));
      ellipse(x1, windowHeight - random(85, 95) + spread/2, spread * random(2,4), random(5,7) * spread/10);
      x1 = random(0, windowWidth);
      y1 = -120;
    }
  }

}