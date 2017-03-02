//var message = "hello";
//
//function setup() {
//	createCanvas(300,300);
//}
//
//function draw() {
//  background(255);
//	textSize(32);
//	text(message, 10,10, 100, 100);
//}
//
//function mousePressed(){
//	message = "goodbye";
//
//}
//
//function mouseReleased(){
//	message = " ";
//}
//
//function keyPressed(){
//	console.log(key);
//	console.log(keyCode); //numerical value of the key - reads as uppercase
//	
//	if (key == 'A'){
//		console.log("A is for apple");
//	}
//}

//------------------------------------------------
//	

//	var i = 0 
//	
//	function setup(){
//		createCanvas(200,200);
//		frameRate(60);
//	}
//
//	function draw(){
//		background(255);
		
//		ellipse(i,height/2,10,10);
		
//		while(i < width){
//			i++;
//			fill(random(255),random(255),random(255));
//			ellipse(random(width), random(height), 10, 10);
//		}
//	
//		for(var i = 0; i < width; i++){
//			fill(random(255));
//			ellipse(random(width),random(height),10,10);
//		}
		
//
//	}

//	------------------------------------------------
//	ARRAYS	
		
//	var randomHello = [];
//		
//	function setup(){
//		createCanvas(500,500);
//		
//		console.log(randomHello.length);
//		console.log(typeof(randomHello));
//		
//		randomHello.push("Hello");
//		randomHello.push("Halo");
//		randomHello.push("Aloha");
//		console.log(randomHello[0]);
//		console.log(randomHello.length);
//		console.log(randomHello);
//		
////		text(randomHello[0], random(width), random(height));
////		text(randomHello[1], random(width), random(height));
////		text(randomHello[2], random(width), random(height));
//		
//		randomHello.sort();
//		console.log(randomHello);
//		
//		randomHello.shift();
//		console.log(randomHello);
//		
//		randomHello.pop();
//		console.log(randomHello);
//		
//		
//		
//		for(var i = 0; i < randomHello.length; i++){
//			text(randomHello[i], random(width), random(height));
//		}
//		
//	}
//		
//	function draw(){
//	
//			
//	}

//------------------------------------------------
//key-value pairs -- poll 
		
var choices = {
	"Cake": 0,
	"Candy": 0,
	"Pie": 0,
	"Savory": 0,
	
};

var cakeMessage = "Cake: 0";
var candyMessage = "Candy: 0";
var pieMessage = "Pie: 0";
var savoryMessage = "Savory: 0";

function setup(){
	createCanvas(400,100);
	console.log(choices);
	console.log(choices["Cake"]);
	console.log(choices["Candy"]);
	console.log(choices["Pie"]);
	console.log(choices["Savory"]);
	
	noStroke();
}

function draw(){
	background(225);
	text(cakeMessage, 10, height/2);
	text(candyMessage, 80, height/2);
	text(pieMessage, 160, height/2);
	text(savoryMessage, 240, height/2);
	
	fill(255,0,0, 100);
	ellipse(30, height/2, choices["Cake"], choices["Cake"]);
	fill(200,100,50, 100);
	ellipse(100, height/2, choices["Candy"], choices["Candy"]);
	fill(0,100,255, 100);
	ellipse(180, height/2, choices["Pie"], choices["Pie"]);
	fill(0,0,0,100);
	ellipse(260, height/2, choices["Savory"], choices["Savory"]);
	
	fill(0,0,0);
	
}

function keyPressed(){
	if (keyCode == 49){
		choices["Cake"]++;
		cakeMessage = "Cake: " + choices["Cake"];
	}else if(keyCode == 50){
		choices["Candy"]++;
		candyMessage = "Candy: " + choices["Candy"];
	}else if(keyCode == 51){
		choices["Pie"]++;
		pieMessage = "Pie: " + choices["Pie"];
	}else if(keyCode == 52){
		choices["Savory"]++;
		savoryMessage = "Savory: " + choices["Savory"];
	}
}
	



