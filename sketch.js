//link https://www.youtube.com/watch?v=u2VVshyrzwA  This is the One!0501
var currentText = "";
var analyzer;
var song;
var fft;
var waveform;
var bubbles =[];
var pink;
var rod;
var frame;
var pic =[];
var pics;

//Load a song and images
function preload(){
   song = loadSound('04 - Little Yellow Spider.mp3 ');
	
	//load all images for mousePressed function
	 for(var p = 0; p <7; p++) {
	  pic[p]=loadImage('pic'+ p +'.gif')
	 }
	
	 pink = loadImage('pinkS.gif'); //pink turtle moving with mouse
	 rod = loadImage('Rod2.gif'); //lady on the left
	 frame = loadImage('back3.gif');  //frame image
}

function setup() {
	createCanvas(1000, 500);
	
	//setup for lyrics
	textAlign(CENTER);
	textSize(70);
	textStyle(BOLD);
  
	fft = new p5.FFT();
	fft.setInput(song);
	song.play();
	
	// create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}


function draw() {
	//gradient color background
	var color2 = color(255,255,153);//yellow
	var color1 = color(255,204,102);//orange
	setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");
	
	//waveform
	waveform = fft.waveform();
	drawWaveform();	
	drawWaveform2();
	drawWaveform3();
  
	//images bubbles
			for (var i = bubbles.length -1; i>=0; i--){
		 bubbles[i].display();
		 bubbles[i].update();
	}	
	if (bubbles.length > 10){
	  bubbles.splice(0, 1);
	}  
	
	lyrics(); //upper row
	lyrics2(); //bottom row
	
	//draw image 
	image(frame,0,0);
	image(rod,0,height/3);
	image(pink, mouseX, mouseY);
}

//gradient color background
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  //up to down
    for (var b = y; b <= y+h; b++) {
      var inter = map(b, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, b, x+w, b);
    }
  }   
}

//Waveform interact with music
function drawWaveform() {
	push();
	noStroke();
	fill(204,0,153,60);
  strokeWeight(2);
  beginShape();
	vertex(0, height);
  for (var w = 0; w<waveform.length; w++){
    var x = map(w, 0, waveform.length, 0, width);
    var y = map(waveform[w], -1, 1, -height/4, height/4);
    vertex(x, y + height/2);
  }
	vertex(width ,height);
  endShape();
	pop();
}
function drawWaveform2() {
	push();
	noStroke();
	fill(255,204,0,95);
  strokeWeight(2);
  beginShape();
	vertex(0, height);
  for (var w = 0; w<waveform.length; w++){
    var x = map(w, 0, waveform.length, 0, width);
    var y = map(waveform[w], -1, 1, -height/6, height/6);
    vertex(x, y + height/1.4);
  }
	vertex(width ,height);
  endShape();
	pop();
}
function drawWaveform3() {
	push();
	noStroke();
	fill(102,0,255,80);
  strokeWeight(2);
  beginShape();
	vertex(0, height);
  for (var w = 0; w<waveform.length; w++){
    var x = map(w, 0, waveform.length, 0, width);
    var y = map(waveform[w], -1, 1, -height/8, height/8);
    vertex(x, y + height/1.2);
  }
	vertex(width ,height);
  endShape();
	pop();
}

function lyrics() {
	push();
	var rms = analyzer.getLevel();
  fill(255);
	this.x = random(0, width);
  this.y = random(0, height);
	pop();
	
	//text design
	updateText();
	stroke(1);
	strokeWeight(1);
	fill(255,153,51);
	text(currentText, width/1.9, height/2-50);
  fill(255,204,204);
	text(currentText, width/1.9+8, height/2-56);
	fill(153,255,204);
	text(currentText, width/1.9+16, height/2-62);
	fill(255); 
	text(currentText, width/1.9+24, height/2-68);
}

//Upper row Lyrics
function updateText(x,y){
	push();
	translate(x,y);
	if(song.currentTime() > 5){
		currentText = "Click";
	}
	if(song.currentTime() > 10){
		currentText = "";
	}
	if(song.currentTime() > 26.5){
		currentText = "Little";
	}
	if(song.currentTime() > 28.5){
		currentText = "laughing at";
	}
	if(song.currentTime() > 31){
		currentText = "maybe that";
	}
		if(song.currentTime() > 32.5){
		currentText = "something that";
	}
	if(song.currentTime() > 33.8){
		currentText = "Cause I'm";
	}
	if(song.currentTime() > 43){
		currentText = "Little";
	}
		if(song.currentTime() > 45){
		currentText = "staring at";
	}
	if(song.currentTime() > 47){
		currentText = "maybe";
	}
	if(song.currentTime() > 48){
		currentText = "figured out";
	}
	if(song.currentTime() > 49){
		currentText = "I couldn't";
	}
	if(song.currentTime() > 50.3){
		currentText = "Who";
	}
	if(song.currentTime() > 59){
		currentText = "I came upon";
	}
	if(song.currentTime() > 61){
		currentText = "I stopped to";
	}
		if(song.currentTime() > 62.7){
		currentText = "I said";
	}
	if(song.currentTime() > 64){
		currentText = "just one"
	}

	if(song.currentTime() > 65){
		currentText = "Before you";
	}
		if(song.currentTime() > 66.5){
		currentText = "you come out";
	}
	if(song.currentTime() > 83){
		currentText = "Hey";
	}
		if(song.currentTime() > 84){
		currentText = "little";
	}
	if(song.currentTime() > 85){
		currentText = "snapping at";
	}
	if(song.currentTime() > 86.5){
		currentText = "there's";
	}
	if(song.currentTime() > 87.8){
		currentText = "I know";
	}
		if(song.currentTime() > 88.6){
		currentText = "what";
	}
		if(song.currentTime() > 89.3){
		currentText = "I just can't";
	}
  	if(song.currentTime() > 98){
		currentText = "Hey";
	}
		if(song.currentTime() > 99){
		currentText = "Little";
	}
		if(song.currentTime() > 100){
		currentText = "you're looking";
	}
	if(song.currentTime() > 102){
		textSize(80);
		currentText = "I think";
	}
	if(song.currentTime() > 104){
		currentText = "before";
	}
	if(song.currentTime() > 104.7){
		currentText = "letting off";
	}
	if(song.currentTime() > 106){
		currentText = "For";
	}
		if(song.currentTime() > 114){
		currentText = "Hey";
	}
	if(song.currentTime() > 115){
		currentText = "Little";
	}
	if(song.currentTime() > 116){
		currentText = "you made it";
	}
	if(song.currentTime() > 118){
		currentText = "And you're got";
	}
		if(song.currentTime() > 120){
		currentText = "with hooves";
	}
	if(song.currentTime() > 122){
		currentText = "All";
	}
		if(song.currentTime() > 138){
		currentText = "Hey";
	}
	if(song.currentTime() > 139){
		currentText = "Little";
	}
	if(song.currentTime() > 140){
		currentText = "they sing about";
	}
	if(song.currentTime() > 142){
		currentText = "where";
	}
		if(song.currentTime() > 143){
		currentText = "Have you";
	}
		if(song.currentTime() > 144){
		currentText = "I haven't heard";
	}	
  	if(song.currentTime() > 146){
		currentText = "Hey";
	}
		if(song.currentTime() > 147){
		currentText = "Little";
	}
		if(song.currentTime() > 148){
		currentText = "swimming";
	}
		if(song.currentTime() > 150){
		currentText = "C'mon, you know";
	}
	if(song.currentTime() > 151.3){
		currentText = "And I,";
	}
	if(song.currentTime() > 152.3){
		currentText = "we really outta";
	}
	if(song.currentTime() > 153.3){
		currentText = "Hey";
	}
		if(song.currentTime() > 154.3){
		currentText = "Mr.";
	}
	if(song.currentTime() > 156.5){
		currentText = "you move so";
	}
	if(song.currentTime() > 159){
		currentText = "You hypnotize with";
	}
		if(song.currentTime() > 161){
		currentText = "all the animals";
	}
	if(song.currentTime() > 162){
		currentText = "For";
	}
	if(song.currentTime() > 163.3){
		currentText = "All";
	}
	if(song.currentTime() > 179){
		currentText = "Hey";
	}
	if(song.currentTime() > 180){
		currentText = "Mr.";
	}
	if(song.currentTime() > 181){
		currentText = "what kind of";
	}
	if(song.currentTime() > 183){
		currentText = "I can't";
	}
		if(song.currentTime() > 184){
		currentText = "but I know";
	}
	if(song.currentTime() > 185){
		currentText = "Goddamn"
	}
	if(song.currentTime() > 186){
		currentText = "I wish";
	}
		if(song.currentTime() > 187){
		currentText = "Hey";
	}
	if(song.currentTime() > 188){
		currentText = "Mrs.";
	}
		if(song.currentTime() > 188.7){
		currentText = "you're";
	}
	if(song.currentTime() > 189.5){
		currentText = "and you're";
	}
	if(song.currentTime() > 191){
		currentText = "It's kinda";
	}
	if(song.currentTime() > 192){
		currentText = "the way";
	}
		if(song.currentTime() > 193){
		currentText = "But";
	}
		if(song.currentTime() > 194){
		currentText = "we all";
	}
    if(song.currentTime() > 200){
		currentText = "";
	}	
	pop();
}
//Bottom row Lyrics
function lyrics2() {
	push();
	var rms = analyzer.getLevel();
  fill(255);
  stroke(255);  
	this.x = random(0, width);
  this.y = random(0, height);
  // Draw an ellipse with size based on volum
	pop();
	
	updateText2();
	fill(255,153,51);
	text(currentText, width/1.9, height/2+80);
  fill(255,204,204);
	text(currentText, width/1.9+8, height/2+86);
	fill(153,255,204);
	text(currentText, width/1.9+16, height/2+92);
  fill(255);
	text(currentText, width/1.9+24, height/2+98);
}

//lyrics not finished yet
function updateText2(x,y){
	push();
	translate(x,y);
		if(song.currentTime() > 5){
		currentText = "the Screen!";
	}
	if(song.currentTime() > 10){
		currentText = "";
	}
	if(song.currentTime() > 26.5){
		currentText = "yellow spider";
	}
	if(song.currentTime() > 28.5){
		currentText = "the snow";
	}
	if(song.currentTime() > 31){
		currentText = "spider knows";
	}
		if(song.currentTime() > 32.5){
		currentText = "I don't know";
	}
	if(song.currentTime() > 33.8){
		currentText = "goddamn cold";
	}
	if(song.currentTime() > 43){
		currentText = "white monkey";
	}
		if(song.currentTime() > 45){
		currentText = "the sand";
	}
	if(song.currentTime() > 47){
		currentText = "that monkey";
	}
	if(song.currentTime() > 48){
		currentText = "something";
	}
	if(song.currentTime() > 49){
		currentText = "understand";
	}
	if(song.currentTime() > 50.3){
		currentText = "knows?";
	}
	if(song.currentTime() > 59){
		currentText = "a dancing crab";
	}
	if(song.currentTime() > 61){
		currentText = "watch it shake";
	}
		if(song.currentTime() > 62.7){
		currentText = "Dance for me";
	}
	if(song.currentTime() > 64){
		currentText = "more time"
	}

	if(song.currentTime() > 65){
		currentText = "hibernate and";
	}
		if(song.currentTime() > 66.5){
		currentText = "a crab cake";
	}
	if(song.currentTime() > 83){
		currentText = "there";
	}
		if(song.currentTime() > 84){
		currentText = "snapping turtle";
	}
	if(song.currentTime() > 85){
		currentText = "a shell";
	}
	if(song.currentTime() > 86.5){
		currentText = "mysteries inside";
	}
	if(song.currentTime() > 87.8){
		currentText = "But";
	}
		if(song.currentTime() > 88.6){
		currentText = "they are";
	}
		if(song.currentTime() > 89.3){
		currentText = "tell for sure";
	}
  	if(song.currentTime() > 98){
		currentText = "ya";
	}
		if(song.currentTime() > 99){
		currentText = "baby crow";
	}
		if(song.currentTime() > 100){
		currentText = "kinda mean";
	}
	if(song.currentTime() > 102){
		textSize(80);
		currentText = "I outta spit";
	}
	if(song.currentTime() > 104){
		currentText = "you start";
	}
	if(song.currentTime() >104.7){
		currentText = "your steam";
	}
	if(song.currentTime() > 106){
		currentText = "sure";
	}
		if(song.currentTime() > 114){
		currentText = "there";
	}
	if(song.currentTime() > 115){
		currentText = "sexy pig";
	}
	if(song.currentTime() > 116){
		currentText = "with a man";
	}
	if(song.currentTime() > 118){
		currentText = "a little kid";
	}
		if(song.currentTime() > 120){
		currentText = "instead of hands";
	}
	if(song.currentTime() > 122){
		currentText = "the animals";
	}
		if(song.currentTime() > 138){
		currentText = "there";
	}
	if(song.currentTime() > 139){
		currentText = "mockingbird";
	}
	if(song.currentTime() > 140){
		currentText = "you in songs";
	}
	if(song.currentTime() > 142){
		currentText = "you been?";
	}
		if(song.currentTime() > 143){
		currentText = "broke a wing?";
	}
		if(song.currentTime() > 144){
		currentText = "you in so long";
	}	
  	if(song.currentTime() > 146){
		currentText = "there";
	}
		if(song.currentTime() > 147){
		currentText = "albatross";
	}
		if(song.currentTime() > 148){
		currentText = "in the air";
	}
		if(song.currentTime() > 150){
		currentText = "I can't fly";
	}
	if(song.currentTime() > 151.3){
		currentText = " I think";
	}
	if(song.currentTime() > 152.3){
		currentText = "outta play fair";
	}
	if(song.currentTime() > 153.3){
		currentText = "there";
	}
		if(song.currentTime() > 154.3){
		currentText = "happy squid";
	}
	if(song.currentTime() > 156.5){
		currentText = "psychadelically";
	}
	if(song.currentTime() > 159){
		currentText = "your magic dance";
	}
		if(song.currentTime() > 161){
		currentText = "in the sea";
	}
	if(song.currentTime() > 162){
		currentText = "sure";
	}
	if(song.currentTime() > 163.3){
		currentText = "the animals";
	}
	if(song.currentTime() > 179){
		currentText = "there";
	}
	if(song.currentTime() > 180){
		currentText = "morning sun";
	}
	if(song.currentTime() > 181){
		currentText = "creature are you?";
	}
	if(song.currentTime() > 183){
		currentText = "stare";
	}
		if(song.currentTime() > 184){
		currentText = "you're there";
	}
	if(song.currentTime() > 185){
		currentText = "how"
	}
	if(song.currentTime() > 186){
		currentText = "I knew";
	}
		if(song.currentTime() > 187){
		currentText = "there";
	}
	if(song.currentTime() > 188){
		currentText = "lovely moon";
	}
		if(song.currentTime() > 188.7){
		currentText = "lonely";
	}
	if(song.currentTime() > 189.5){
		currentText = "blue";
	}
	if(song.currentTime() > 191){
		currentText = "strange";
	}
	if(song.currentTime() > 192){
		currentText = "you change";
	}
		if(song.currentTime() > 193){
		currentText = "then again";
	}
		if(song.currentTime() > 194){
		currentText = "do too ";
	}
  if(song.currentTime() > 200){
		currentText = "";
	}	
	pop();
}


function mousePressed(){
	pics = random(pic); 
  var b = new Bubble(mouseX, mouseY,pics);
	bubbles.push(b);
}

//Add images 
function Bubble(x,y, img){
  this.x = x;
	this.y = y;
	this.pics = img;
	
	//To make images moving around
	this.speedX = random(-7,7);
	this.speedY = random(-5,5);
	
	  this.display =  function(){
			image(this.pics, this.x, this.y);
		}
		this.update = function(){
			this.x = this.x + this.speedX;
			this.y = this.y + this.speedY;
			if((this.x + this.pics.width)  >= width+15 || (this.x - this.pics.width) <= -15){
		this.speedX = this.speedX * -1;
	}
	if((this.y + this.pics.height) >= height+15 || (this.y - this.pics.height) <= -15){
		this.speedY = this.speedY * -1;
	 }
	}			
}
