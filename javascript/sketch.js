let canvas;
let saveButton, clearButton, mouseButton;
let slider;
var r;
var g;
var b;
var a;

let displayState = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container");

  // saveButton = createButton("save");
  // saveButton.mousePressed(saveFile);

  // clearButton = createButton("clear");
  // clearButton.mousePressed(clearScreen);

  // fullscreenButton = createButton("Full Screen");
  // fullscreenButton.mousePressed(screenFull);

  // brushSlider = createButton("Brush Size");
  // sizeSlider = createSlider(1, 10);

  addGUI();
}

// function saveFile() {
//   save("design.jpg");
// }

// function screenFull() {
//   let fs = fullscreen();
//   fullscreen(!fs);
// }

// function clearScreen() {
//   background(255);
// }

function draw() {
  translate(width, height);

  if ((mouseX > 0) & (mouseY > 0)) {
    let x = mouseX - width;
    let y = mouseY - height / 2;
    let x1 = mouseX - width;
    let y2 = mouseY - height;

    if (mouseIsPressed) {
      let sw = slider.value();
      push();
      r = random(255, 200); // r is a random number between 0 - 255
      g = random(200, 10); // g is a random number betwen 100 - 200
      b = random(300, 100); // b is a random number between 0 - 100
      a = random(200, 100); // a is a random number between 200 - 255

      if (displayState == 0) {
        stroke(r, g, b, a);
        strokeWeight(sw);
        line(x, y, x1, y2);
        pop();
      } else {
        stroke(r, g, b, a);
        strokeWeight(sw);
        rect(x, y, x1, y2);
      }
    }
  }
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

  resizeCanvas(windowWidth, windowHeight);

}
