let canvas;
let saveButton, clearButton, mouseButton;
let slider;
var r;
var g;
var b;
var a;

let displayState = 0;

function setup() {
  // canvas = createCanvas(windowWidth, windowHeight);
  canvas = createCanvas(400, 400);
  canvas.parent("sketch-container");

  addGUI();
}

function draw() {

  background(0,150,200);//sky

  let sw = slider.value();
  
  fill(33,35,36,sw)
  quad(0,0,400,0,400,400,0,400)//NIGHT SKY	
  
  noStroke(0)
  fill(133,117,95)
  quad(0,200,400,200,400,400,0,400)//ground
  
  noStroke(0)
  fill(252,211,73,sw*-1)	
  quad(0,200,400,200,400,400,0,400)// ground NIGHT
  
  strokeWeight(5);// Left Cloud
  noStroke(230);
  fill(255,255,255,sw*-1);
  ellipse(114,113,80,30);
  ellipse(65,128,50,30);
  ellipse(128,100,30,20);
  ellipse(129,130,50,30);
  ellipse(97,135,70,40);
  
  fill(245,160,49)
  triangle(215,310,375,310,290,140)// right pyramid 
  
  fill(173,128,69,sw)
  triangle(215,310,375,310,290,140)// NIGHT front right pyramid
  
  
  fill(207,119,4)
  triangle(290,140,364,272,375,310)// right side of the second pyramid
  
  fill(61,55,54,sw)
  triangle(290,140,364,272,375,310)// NIGHT right side of triangle 3D right 
    
  fill(245,160,49)
  triangle(10,320,210,320,110,100)// pyramid 
  
  fill(173,128,69,sw)
  triangle(10,320,210,320,110,100)// NIGHT left front pyramid
    
  fill(207,119,4)
  triangle(110,100,200,269,210,320)// right side of triangle 3D left
    
  fill(61,55,53,sw)
  triangle(110,100,200,269,210,320)// NIGHT right side of triangle 3D left
    
  strokeWeight(5);//right Cloud
  noStroke(230);
  fill(255,255,255,sw*-1);
  ellipse(314,83,80,30);
  ellipse(270,98,50,30);
  ellipse(342,75,30,20);
  ellipse(343,100,50,30);
  ellipse(311,105,70,40);
    
  fill(245,198,27)
  ellipse(sw,50,60,60)// Sun
    
  fill(230,230,230,sw)
  ellipse(sw*1,50,60,60)// Moon  

}

function addGUI() {
  slider = createSlider(0, 255, 100);
  slider.addClass("slider");
  slider.parent("gui-container");

  if (displayState == 0) {
    button = createButton("Change to Rect");
  }else{
    button = createButton("Change to Line");
  }
  button.addClass("button");
  button.parent("gui-container");
  button.mousePressed(handleButtonPress); 
}

function handleButtonPress(){
  if(displayState < 1)
  {
    displayState++;
    background(255);
  }else{
    displayState = 0;
    background(255);
  }

  if(displayState == 0)
  {
      button.html("Change to Rect");
  }else if(displayState == 1){
      button.html("Change to Line");
  }
}

function windowResized() {

  // resizeCanvas(windowWidth, windowHeight);
  resizeCanvas(400, 400);

}
