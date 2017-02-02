//var num = 100;
//var num2 = 50;
//var message = "hello";
//var anotherMessage = "goodbye";
//var booleanVar = true;
//var booleanVar2 = false;
var mouthX = 50;
var mouthY = 300;
var mouthW = 400;
var mouthH = 60;

function setup() {
    
//console.log(num);
//console.log("num + num2 " + (num + num2));
//console.log(num * num2);
//console.log(message + anotherMessage);
//console.log(message + " " + anotherMessage); //this adds a space between the words 
//console.log(booleanVar);
//
//console.log(message + num); //hello100
//console.log(message * num); //NaN
//    /*multi line comment*/
//    
//var message2 = "This only works in the setup";
//console.log(message2);
    
createCanvas(500,400);
background(130,27,60);
console.log("width " + width + " " + "height " + height);

}

function draw() {
    // x, y, width, height
    ellipse(70,70,100,100);
    ellipse(width/2,height/2,60,60); //adjusts to canvas size 
    rect(mouthX,mouthY,mouthW,mouthH);
    line(mouthX,mouthY + mouthH/2,mouthX + mouthW,mouthY + mouthH/2);
    //x & y start, x & y finishing
}