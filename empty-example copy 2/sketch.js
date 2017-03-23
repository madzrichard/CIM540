//var section1 = 100;
//var section2 = 200;
//var section3 = 300;
//
//var currentSection = 0;
//
//var fillColor;
//
//function setup() {
//    createCanvas(400, 400);
//    fillColor = color(255,255,255);
//}
//
//function draw() {
//    background(255);
//    fill(fillColor);
//    rect(0, 0, 399, 399);
//    line(section1, 0, section1, height);
//    line(section2, 0, section2, height);
//    line(section3, 0, section3, height);
//	
//    if (mouseX > 0 && mouseX <= section1) {
//        //console.log("In Section1")
//        currentSection = 1;
//    } else if (mouseX > section1 && mouseX <= section2) {
//        currentSection = 2;
//
//    } else if (mouseX > section2 && mouseX <= section3) {
//        currentSection = 3;
//
//    } else if (mouseX > section3 && mouseX <= width) {
//        currentSection = 4;
//
//    }
//
//    console.log(currentSection);
//}
//
//function mousePressed() {
//    if (currentSection == 1) {
//        fillColor = color(255, 0, 0)
//    } else if (currentSection == 2) {
//        fillColor = color(0, 255, 0)
//
//    } else if (currentSection == 3) {
//        fillColor = color(0, 0, 255)
//
//    } else if (currentSection == 4) {
//        fillColor = color(100, 100, 10)
//
//    }
//}

var box1X = 50;
var box1Y = 50;

var box2X = 250;
var box2Y = 250;

var boxSize = 50;

var box1Selected = false;
var box2Selected = false;

var goal1X = 200;
var goal1Y = 200;

var goal1Size = 100;

var box1Dist = 0;
var box2Dist = 0;


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    rectMode(CENTER);

    fill(255);

    rect(width / 2, height / 2, width - 1, height - 1);

    fill(0);
    rect(goal1X, goal1Y, goal1Size, goal1Size);

    fill(255);
    rect(box1X, box1Y, boxSize, boxSize);
    rect(box2X, box2Y, boxSize, boxSize);



    if (box1Selected == true) {
        box1X = mouseX;
        box1Y = mouseY;
    } else {

        var box1goal1Dist = int(dist(box1X, box1Y, goal1X, goal1Y));
        if (box1goal1Dist < 50) {
            console.log("box1 in");
        }
    }

    if (box2Selected == true) {
        box2X = mouseX;
        box2Y = mouseY;
    } else {

        var box2goal1Dist = int(dist(box2X, box2Y, goal1X, goal1Y));
        if (box2goal1Dist < 50) {
            console.log("box2 in");
        }
    }

    box1Dist = int(dist(mouseX, mouseY, box1X, box1Y));
    box2Dist = int(dist(mouseX, mouseY, box2X, box2Y));

}

function mousePressed() {
    if (box1Dist < boxSize) {
        console.log("overBox1");
        if (box1Selected == false) {
            box1Selected = true;
        } else {
            box1Selected = false;
        }
    }

    if (box2Dist < boxSize) {
        console.log("overBox2");
        if (box2Selected == false) {
            box2Selected = true;
        } else {
            box2Selected = false;
        }
    }

}
