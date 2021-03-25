var lines = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  initialize();
}

function draw() {
  for(var i=0; i<lines.length; i++) {
    lines[i].display();
  }
}

function initialize() {
  for(var i=0; i<50; i++) {
    l = new Line(5, 5 + 10*i, width-5, 5 + 10*i);
    lines.push(l);
  }
}

function mousePressed() {
}
