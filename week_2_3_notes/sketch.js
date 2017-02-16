
var mouthX = 50;
var mouthY = 300;
var mouthW = 400;
var mouthH = 60;
var eye1X = 70;
var eye1Y = 70;
var eye2Offset = 350;
var pupilOffset = 10;

var backgroundColor = 'yellow';
var ranNum = 0;
var mapX = 0;



function setup() {
    
    createCanvas(500,400);
    background(130,27,60);
    console.log("width " + width + " " + "height" + height);
    noStroke(); //to get rid of all black lines from drawing - but removes lines as well 


    console.log(ranNum);

    ranNum = random(256); //generating number up to 256 but not including it 
    }




function draw() {
    
    mapX = map(mouseX,0,500,-10,10);
                //what is it maping, initial range-mapping from, what you are mapping to-what the initial range is being condensed to. 
                //mapX is what you put into what you want to be mapped ->command
    
    background(backgroundColor); //creates a cursor instead of drawing with the dot 
    
    ellipse(mouseX,mouseY,10,10); //mouse cursor 
    
    // x, y, width, height
    //eye1
    fill(255);
    ellipse(eye1X,eye1Y,100,100);
    fill(0,0,150);
    ellipse(eye1X + mapX,eye1Y + pupilOffset,25,50);
    
    //eye2
    fill(255)
    ellipse(eye1X + eye2Offset,eye1Y, 100,100);
    fill(0,0,150);
    ellipse (eye1X+eye2Offset+mapX,eye1Y + pupilOffset,25,50);
    
    fill(255);
    
    //nose
    triangle(250,200,290,240,210,240);

    //triangle goes clockwise x1,y1,x2,y2,x3,y3
    
    //mouth
    rect(mouthX,mouthY,mouthW,mouthH);
    
    //lips
    stroke(130,27,60); //have to put stroke back in lines if you remove in setup
    strokeWeight(5);
    line(mouthX,mouthY + mouthH/2,mouthX + mouthW,mouthY + mouthH/2);
    noStroke();
    //x & y start, x & y finishing
    
//    ellipse(random(width),random(height),50,50); //dots dancing around screen 
    
    //arcs have: x,y position, a width & height,  --uses a grid of 0 - 2PI
    //0 - 1/2PI - PI - PI+1/2PI - 2PI
    //tongue
//    frameRate(20);
    fill(ranNum,0,0);
    arc(290,333,100,120,0,PI); //QUARTER_PI or HALF_PI

}




function mousePressed(){
    backgroundColor = 'pink'; //changes the value of the variable backgroundColor 
    
}



function mouseReleased(){
    backgroundColor = 'grey';
}

