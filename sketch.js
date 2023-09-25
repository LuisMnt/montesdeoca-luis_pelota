let posX;
let posY;
let diametro;
let radio;
let colcir;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //print(posX);
  //posX = 257;
  // print(posX);
  // posX = posX + 25;
  // print(posX);
  // posX = posX * 2;
  // print(posX);
  // posX = posX / 5
  // print(posX);
  // posX *= 8
  // print(posX);
  // posX *= 50
  // print(posX);
  // posX ++;
  // print(posX);
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  diametro = 30;
  radio = diametro / 2;
  colcir = color(25, 100, 50);
}

function draw() {
  background(0, 82, 153);

  if (posX < -radio) {
    diametro = random(10, 100);
    radio = diametro / 2;
    colcir = color(random(1, 255), 10, random(1, 255));
    posX = windowWidth + radio;
  }

  posX -= 10;
  fill(colcir);
  circle(posX, posY, diametro);
}
