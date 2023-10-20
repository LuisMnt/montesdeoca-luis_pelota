let posX;
let posY;
let diametro;
let radio;
let colcir;

let posX2;
let posY2;
let diametro2;
let radio2;
let colcir2;

let posX3;
let posY3;
let diametro3;
let radio3;
let colcir3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  posX = windowWidth / 2;
  posY = random(windowHeight);
  diametro = 40;
  radio = diametro / 2;
  colcir = color(0, 255, 255);

  posX2 = windowWidth / 2;
  posY2 = random(windowHeight + 20);
  diametro2 = 15;
  radio2 = diametro2 / 2;
  colcir2 = color(0, 240, 255);

  posX3 = windowWidth / 2;
  posY3 = random(windowHeight + 5);
  diametro = 23;
  radio3 = diametro3 / 2;
  colcir3 = color(0, 255, 240);
}

function draw() {
  background(50);
  noStroke();

  if (posX < -radio) {
    diametro = random(40, 100);
    radio = diametro / 2;
    colcir = color(random(0), random(255), random(255));
    posX = windowWidth + radio;
    posY = random(windowHeight + 10);
  }

  if (posX2 < -radio2) {
    diametro2 = random(40, 180);
    radio2 = diametro2 / 2;
    colcir2 = color(random(173), random(216), random(230));
    posX2 = windowWidth + radio2;
    posY2 = random(windowHeight + 30);
  }
  if (posX3 < -radio3) {
    diametro3 = random(23, 180);
    radio3 = diametro3 / 2;
    colcir3 = color(random(64), random(224), random(208));
    posX3 = windowWidth + radio3;
    posY3 = random(windowHeight + 50);
  }
  posX -= 10;
  fill(colcir);
  circle(posX, posY, diametro);

  posX2 -= 18;
  fill(colcir2);
  circle(posX2, posY2, diametro2);

  posX3 -= 8;
  fill(colcir2);
  circle(posX2, posY2, diametro2);
}
