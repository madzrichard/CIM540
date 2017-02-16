var counter = 0;
var ballDir = true; //want to move in positive direction first
var eColor  = 0; //can't declar "color" above set up - empty variable and then do in the set up
var bgColor = "white";
var colorArray = ["white","green","pink","purple","blue","orange"];

function setup() {
    createCanvas(400, 400);
    eColor = color(235,122,79);
	console.log(colorArray[2]);
}

function draw() {

//MOVING BALL EXAMPLE START---------------------------------------
//    background(255);
//    
//    if (counter <= 0) {
//        //limit one
//        ballDir = true;
//        console.log("left hit: " + counter);
//    }
//
//    if (counter >= width) {
//        //limit two
//        ballDir = false;
//        console.log("right hit: " + counter);
//    }
//
//
//    if (ballDir == true) {
//        counter = counter + 1;
//    } else {
//        counter = counter - 1;
//    }
//
//    if (counter >= 0 && counter <= 200) {
//        fill("blue");
//    } else if (counter > 200 && counter <= 400) {
//        fill("green");
//    } else if (counter > 400 && counter <= width) {
//        fill("red");
//    } else {
//        fill("white");
//    }
//
//    ellipse(counter, height / 2, 25, 25);
//MOVING BALL EXAMPLE END------------------------------------------

	
	
CHANGING COLORS CIRCLE AND SQUARE
    background(bgColor);
    fill(eColor);
    ellipse(width/2,height/2,200,200);

    if (mouseX > width/2){
        eColor = color(200,262,15);
    }else{
        eColor = color(123,45,222);
    }
//
//    if(counter == 1){
//        bgColor = "orange";
//    }else if(counter == 2){
//        bgColor = "pink";
//    }else if (counter == 3){
//        bgColor = "red";
//    }else{
//        bgColor = "white";
//    }
//    
//    if(counter > 3){
//        counter = 0;
//    }
	
	
//ARRAYS - quicker than the above method 
	background(colorArray[counter]);

	
}

function mousePressed(){
   counter = counter + 1;  
    console.log(counter); //shows you how many times user has pressed mouse 
	
	if(counter > colorArray.length - 1){
		counter = 0; //be mindful of where the if statement is with counters 
	}
	
	
    
     
    
    
}