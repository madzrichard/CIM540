var project;
var project1;
var project2;
var project3;
var project4;

var projectArray = [];

var projectIndex = 0;


function setup() {
	createCanvas(792, 612);
	
	projectArray.push(loadImage("images/project.jpg"));
	projectArray.push(loadImage("images/project1.jpg"));
	projectArray.push(loadImage("images/project2.jpg"));
	projectArray.push(loadImage("images/project3.jpg"));
	projectArray.push(loadImage("images/project4.jpg"));
}

function draw() {
	image(projectArray[projectIndex],0,0);

}

function mousePressed(){
	projectIndex = projectIndex + 1
	if (projectIndex > projectArray.length - 1) {
		 projectIndex = 0
	
}


	 
	 
}