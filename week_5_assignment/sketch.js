var question = "Which social media platform do you use most?";

var responses = {
  "Facebook": 0,
  "Instagram": 0,
  "Snapchat": 0,
  "Twitter": 0
};

var currentAnswer = 0;

var textHeight = 100;

var totalCounter = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();

}

function draw() {
  background(140,5,77);
  fill("white");
  textAlign(CENTER);
  text(question, 0, 100, width, 100);

  var choiceCounter = 0;
  totalCounter = 0;

  for (var keys in responses) {

    fill("white");
    textAlign(CENTER);
    text(keys, choiceCounter * textHeight, height / 2, textHeight, textHeight);
    text(choiceCounter + 1, choiceCounter * textHeight, height / 2 + 20, textHeight, textHeight);
    text(responses[keys], choiceCounter * textHeight, height / 2 + 40, textHeight, textHeight);

    choiceCounter++;

    totalCounter += responses[keys];

  }

  choiceCounter = 0;
  for (var keys in responses) {
    var rectHeight = map(responses[keys], 0, totalCounter, 0, height);
    fill(225, 40);
    rect((choiceCounter * 100) + 20, height - rectHeight, 50, height);
    choiceCounter++;
  }

  fill("white");
  var totalMessage = "TOTAL : " + totalCounter;
  text(totalMessage, 195, height - 60);

}

function keyPressed() {
  //console.log(keyCode);

  if (keyCode == 49) {
    responses["Facebook"]++;
  } else if (keyCode == 50) {
    responses["Instagram"]++;
  } else if (keyCode == 51) {
    responses["Snapchat"]++;
  } else if (keyCode == 52) {
    responses["Twitter"]++;
  }


}