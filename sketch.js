function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 82, 153);
  fill(0, 216, 245);
  strokeWeight(mouseY)
  //circle(windowWidth, windowHeight);
  textSize(70)
  textStyle(BOLDITALIC);
  text(mouseX, 50, 80)
  text(int(mouseY), 50, 150)
}