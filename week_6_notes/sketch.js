function setup() {
	createCanvas(700,1000);
	img = loadImage("coolgirl.jpg");
}

function draw() {
  image(img, 0, 0);
  image(img, 0, height/2, img.width/2, img.height/2);
}