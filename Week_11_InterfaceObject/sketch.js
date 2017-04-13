var iArray = [];

var currentType = "";

var bubble0;

var i;

function setup() {
	createCanvas(400,400);
	iArray.push(new interface(50,299,100,"start"));
	iArray.push(new interface(150,299,100,"stop"));
	iArray.push(new interface(250,299,100,"reset"));
	
	bubble0 = new bubble(0,200,100);
}

function draw() {
	background(255);
	
	bubble0.display();
  
	for(var i=0; i < iArray.length; i++){
		var checking = iArray[i].check();
		
		var settingAlpha
		if(checking == true){
//			console.log("currently over " + iArray[i].type)
			settingAlpha = 100;
		}else{
			settingAlpha = 255;
		}
		
		iArray[i].display(settingAlpha);
			
	}
	
	if(currentType == "start"){
		bubble0.move();
	}else if(currentType == "stop"){
		bubble0.stop();
	}else if(currentType == "reset"){
		bubble0.reset();
	}
}


function mousePressed(){
	for(var i = 0; i < iArray.length; i++){
		var checkInterface = iArray[i].check();
		if(checkInterface == true){
			currentType = iArray[i].type;
			console.log("current type = " + currentType);
		}
	}
}


function interface(tempX,tempY,tempSize,tempType){
	this.x = tempX;
	this.y = tempY;
	this.size = tempSize;
	this.type = tempType
	
	this.display = function(setAlpha){
		
		if(this.type == "start"){
			fill(255,0,0);
				}else if(this.type == "stop"){
			fill(0,255,0)
				}else if(this.type == "reset"){
			fill(0,0,255)
			}

		rect(this.x, this.y, this.size, this.size);
	}
	
	this.check = function(){
		if(mouseX > this.x && mouseX < (this.x + this.size) && (mouseY > this.y && mouseY < (this.y + this.size))){
		   	return true;
		   }else{
		   	return false;
		   }
		
		if(mouseX > (this.x + this.size) && mouseX < (this.x + 2(this.size)) && (mouseY > this.y && mouseY < (this.y + this.size))){
			return false;
		}else{
			return true;
		}
		
	}
}

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
		this.x++;
	}
	
	this.stop = function(){
		this.x = this.x;
	}
	
	this.reset = function(){
		this.x = 0;
	}
	
	this.checkPos = function(){
		if(this.x > width){
			return true;
		}else{
			return false;
		}
	}
}
