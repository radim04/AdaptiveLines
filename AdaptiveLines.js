var lines = [];
var img;
var buffer;
var result;

function preload() {
  img = loadImage('data/dali.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  buffer = new jsfeat.matrix_t(img.width, img.height, jsfeat.U8C1_t);
  img.loadPixels();
}

function draw() {
  var blurSize = select('#blurSize').elt.value;
  var lowThreshold = select('#lowThreshold').elt.value;
  var highThreshold = select('#highThreshold').elt.value;

  blurSize = map(blurSize, 0, 100, 1, 12);
  lowThreshold = map(lowThreshold, 0, 100, 0, 255);
  highThreshold = map(highThreshold, 0, 100, 0, 255);

  jsfeat.imgproc.grayscale(img.pixels, img.width, img.height, buffer);
  jsfeat.imgproc.gaussian_blur(buffer, buffer, blurSize, 0);
  jsfeat.imgproc.canny(buffer, buffer, lowThreshold, highThreshold);

  result = jsfeatToP5(buffer, result);
  image(result, 0, 0, img.width, img.height);
  /*
  for(var i=0; i<lines.length; i++) {
    lines[i].display();
  }*/
}

// convert grayscale jsfeat image to p5 rgba image
// usage: dst = jsfeatToP5(src, dst)
function jsfeatToP5(src, dst) {
    if (!dst || dst.width != src.cols || dst.height != src.rows) {
        dst = createImage(src.cols, src.rows);
    }
    var n = src.data.length;
    dst.loadPixels();
    var srcData = src.data;
    var dstData = dst.pixels;
    for (var i = 0, j = 0; i < n; i++) {
        var cur = srcData[i];
        dstData[j++] = cur;
        dstData[j++] = cur;
        dstData[j++] = cur;
        dstData[j++] = 255;
    }
    dst.updatePixels();
    return dst;
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
