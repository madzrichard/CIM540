    var backgroundColor = 'yellow';
    var eye1X = 290;
    var eye1Y = 190;
    var eye2Offset = 40;
    var pupilOffset = 0;
    var mapX = 0;


function setup() {

    createCanvas(600,600);
    }

function draw() {
    
    mapX = map(mouseX,0,600,-25,-10);
    
    background(backgroundColor);

    strokeWeight(1.5);    

    fill(47,79,79); //pants
    rect(243,350,115,40);

    fill(0,0,0); //shoes
    rect(238,390,60,10);
    rect(303,390,60,10);

    line(300,364,300,389);

    fill(255,69,0); //body
    rect(225,250,150,100,20,20,5,5);

    line(250,290,250,350); //lines on shirt
    line(350,290,350,350);
    line(300,200,300,350);
    line(260,290,272,303);
    line(285,290,272,303);
    line(315,290,327,303);
    line(340,290,327,303);

    noFill();
    rect(260,290,25,33); //rectangles on shirt
    rect(315,290,25,33);

    fill(35,230,100); // hands
    ellipse(233,350,40,35);
    ellipse(360,350,40,35);

    fill(255,220,177); //head
      ellipse(300,200,150,150);

    fill(35,230,100); //hat
    rect(225,110,150,60,20,20,5,5);

    fill(35,230,100); //ears of hat
    ellipse(225,190,25,70);
    ellipse(375,190,25,70);

    fill(255,255,255); //white of eyes
    ellipse(280,200,40,50);
    ellipse(320,200,40,50);

    fill(0,0,0); //pupils
    ellipse(eye1X + mapX,eye1Y + pupilOffset,5,5);
    ellipse(eye1X+eye2Offset+mapX,eye1Y + pupilOffset,5,5);

    line(290,250,310,250); //mouth
    }


function mousePressed(){
    backgroundColor = 'orange'; 
    
    }

function mouseReleased(){
    backgroundColor = 'green';
    }
