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

let posX4;
let posY4;
let diametro4;
let radio4;
let colcir4;

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
  posY3 = random(windowHeight + 20);
  diametro3 = 30;
  radio3 = diametro2 / 2;
  colcir3 = color(20, 200, 150);

  posX4 = windowWidth / 2;
  posY4 = random(windowHeight + 20);
  diametro4 = 10;
  radio4 = diametro2 / 2;
  colcir4 = color(255, 0, 10);
}

function draw() {
  background(255, 255, 210);
  noStroke();

  if (posX < -radio) {
    diametro = random(40, 500);
    radio = diametro / 2;
    colcir = color(random(0), random(255), random(255), random(1, 255));
    posX = windowWidth + radio;
    posY = random(windowHeight + 10);
  }

  if (posX2 > windowWidth + radio2) {
    diametro2 = random(40, 500);
    radio2 = diametro2 / 2;
    colcir2 = color(random(173), random(216), random(230), random(1, 255));
    posX2 = -radio2;
    posY2 = random(windowHeight + 30);
  }

  if (posX3 < -radio3) {
    diametro3 = random(40, 500);
    radio3 = diametro3 / 2;
    colcir3 = color(random(0), random(255), random(255), random(1, 255));
    posX3 = windowWidth + radio3;
    posY3 = random(windowHeight + 50);
  }

  if (posX4 > windowWidth + radio4) {
    diametro4 = random(40, 500);
    radio4 = diametro4 / 2;
    colcir4 = color(random(173), random(216), random(230), random(1, 255));
    posX4 = -radio4;
    posY4 = random(windowHeight + 30);
  }

  posX -= 20;
  fill(colcir);
  circle(posX, posY, diametro);

  posX2 += 30;
  fill(colcir2);
  circle(posX2, posY2, diametro2);

  posX3 -= 25;
  fill(colcir3);
  circle(posX3, posY3, diametro3);

  posX4 += 15;
  fill(colcir4);
  circle(posX4, posY4, diametro4);
}
