var ballDir = true;
var counter = 0;


function setup() {
	createCanvas(400, 400);
	background(0,0,0);

}

function draw() {
	
//	counter = height/2;
	
	if (counter <= height/2) {
		ballDir = true;
	}else{
		ballDir = false;
	}
	
	if (mouseY < height/2){
		ballDir = true;
	}
	
	if (mouseY > height/2){
		ballDir = false;
	}
	
	if (ballDir == true) {
		counter = counter - 1;
	}
  
	if (ballDir == false){
		counter = counter + 1;
	}
	
	if (counter > 400){
		counter = 400;
	}
	
	if (counter < 0){
		counter = 0;
	}
	
	
	
  if (mouseY > height/2){
        background(200,262,15);
    }else if(mouseY < height/2){
        background(123,45,222);
    }else{
		baground(0,0,0);
	}	
	
	ellipse(width/2,counter,40,40);
	
	
}