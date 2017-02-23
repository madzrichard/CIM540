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
//key-value pairs
		
//var choices = {
//	"Cake": 0,
//	"Candy": 0,
//	"Pie": 0,
//	"Savory": 0,
//	
//	
//};
//
//function setup(){
//	createCanvas(400,100);
//	console.log(choices);
//	console.log(choices["Cake"]);
//	console.log(choices["Candy"]);
//	console.log(choices["Pie"]);
//	console.log(choices["Savory"]);
//}
//
//function draw(){
//	
//}
//
//function keyPressed(){
//	if (keyCode == 49){
//		choices["Cake"]++;
//		console.log(choices["Cake"]);
//		}
//}



