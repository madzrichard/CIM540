var sound;
var amplitude;
var cnv;

function preload(){
  sound = loadSound('assets/mind.mp3');
}
function setup() {
  cnv = createCanvas(400,400);
  amplitude = new p5.Amplitude();

  cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
}
function draw() {
  background(200);
  fill(66,146,244);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200);
  ellipse(width/2, height/2, size, size);
}