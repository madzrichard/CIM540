var bubbleX = 0;
var bubbleY = 200;
var bubbleSize = 200;

var bubble0;
var bubble1;

var bubbles = [];



function setup() {
	createCanvas(400,400);
	bubble0 = new bubble(100,100,100);
	bubble1 = new bubble(200,200,100);
	
	for(var i = 0; i < 100; i++){
		bubbles.push(new bubble(random(width), random(height), random(10,100), random(1,10)));
	}
	console.log(bubbles.length);
	
}



function draw() {
	background(255);
	
//	bubble0.display();
//	bubble0.move();
//	var checkBubble = bubble0.checkPos();
//	if(checkBubble == true){
//		bubble0.x = 0; 
//	}
//	
//	bubble1.display();
//	bubble1.move();
//	var checkBubble1 = bubble1.checkPos();
//	if(checkBubble1 == true){
//		bubble1.x = 0; 
//	}
//	
//	bubbles[0].display();
//	bubbles[0].move();
	
	for(var i = 0; i < bubbles.length; i++){
		bubbles[i].display();
		bubbles[i].move();
			var checkBubble = bubbles[i].checkPos();
			if(checkBubble == true){
				bubbles[i].x = 0;
		}
	}
//	
//	display();
//	move();
//	console.log(checkPos());
//	var checking = checkPos(); //has two values true or false
//	
//	if(checking == true){
//		bubbleX = 0; 
//	}
//	
//	if(mouseIsPressed){
//		moveFaster(10);
//	}
//
	
	
}

//function display(){
//	ellipse(bubbleX,bubbleY,bubbleSize,bubbleSize);
//}
//
//function move(){
//	bubbleX++;
//}
//
//function moveFaster(howFast){
//	bubbleX = bubbleX + howFast;
//}
//
//
//function checkPos(){
//	if(bubbleX > width){
//		return true;
//	}else{
//		return false;
//	}
//}



//bubble object
function bubble(tempX, tempY, tempDiameter, tempSpeed){
	
	this.x = tempX;
	this.y = tempY;
	this.diameter = tempDiameter;
	this.speed = tempSpeed;
	
	this.r = random(255);
	this.g = random(255);
	this.b = random(255);
	
	this.display = function(){
		fill(this.r,this.g,this.b);
		ellipse(this.x,this.y,this.diameter,this.diameter);
	}
	
	this.move = function(){
		this.x = this.x + this.speed;
	}
	
	this.checkPos = function(){
		if(this.x > width){
			return true;
		}else{
			return false;
		}
	}
}


