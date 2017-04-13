Sound Library Tutorial: To create a ellispe that changes size to the amplitude of music being played

1. To utilize the p5.sound.js library you first have to make sure that it is within your libraries folder.

2. Next you have to link it in the head of your HTML file using the following code below:

language="javascript" type="text/javascript" src="libraries/p5.sound.js - within a script tag

3. Now you can start building the sketch.js file utilising the sound library.

4. Make sure you have the a sound mp3 ready to utilize in your overall folder or within an assets folder.

5. Start off by creating the variables you will need to use throughout the document, these being "sound", "amplitude" & "cnv"-meaning 	canvas.You do not need to give these values, just create the variables.

6. Then you want to preload the sound file, so it doesn't have to be continuosly loaded like it would be in the draw function. 	
	For this you will utilize the built in loadSound() function to make the sound variable equal to the mp3 you are loading, so you can use "sound" later on.
	
	sound = loadSound('blank.mp3')

7. Then within the setup you will create your canvas to your desired dimensions, making it equal to the variable "cnv"

	cnv = createCanvas(400,400)

8. Also within setup you will give a value to our amplitude variable which is to create a new value for differing amplitudes that the p5.Amplitude function is able to measure. p5.Amplitude is built into the sound library to measure volume between 0.0 & 1.0. 

	amplitude = new p5.Amplitude()

9. And the final thing within the setup is to apply a mouseClicked function to the canvas(cnv). So when anywhere inside the canvas is clicked will either play or stop the sound depending on the current state. We use an if-else statement for this. We are able to use the isPlaying() function to find that if the sound is playing currently we can stop it, else we can play it. The stop() & play() functions are already built into the library. 

	cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }}

10. Now it is on to the draw function where we first determine a background color as well as a fill color for our ellipse so that we can view it properly. 

11. Next we need to create two variables that will take the aplitude value and convert it into the size of the ellipse. 
	variable "level" uses the built in function getLevel() on the amplitude value and returns a number between 0 & 1 we can then use.
	variable "size" will then use the map() function to rescale the "level" value from its point between 0 & 1 to its relative point between 0 & 200. - this enlarging the visual change that different amplitude values give us. 
	
 	var level = amplitude.getLevel();
  	var size = map(level, 0, 1, 0, 200);
	 
12. Last but not least you are going to create the ellipse, to sit in the middle of the canvas (width/2, height/2), but then the width & height of the actual ellipse will be the variable "size" and therefore depend on the aplitude of the sound being played. From here you can put in any mp3 into the loadSound(); above and the size will change according to the music. 

	ellipse(width/2, height/2, size, size);
