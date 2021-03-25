var lines = [];
var img;

function preload() {
  img = loadImage('data/dali.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(155);
  createLines();
}

function draw() {
  image(img, 0, 0);
  for(var i=0; i<lines.length; i++) {
    lines[i].display();
  }
}

function createLines() {
  for(var i=0; i<50; i++) {
    l = new Line(5, 5 + 10*i, width-5, 5 + 10*i);
    lines.push(l);
  }
}

function createImage() {
  img = createImage(200, 200);
  img.loadPixels();
}
