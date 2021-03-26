const toolbarWidth = 150;
var lines = [];
var img;
var buffer;
var result;
var toolbar;

function preload() {
  img = loadImage('data/dali.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  toolbar = new Toolbar(0, 0, toolbarWidth);
  buffer = new jsfeat.matrix_t(img.width, img.height, jsfeat.U8C1_t);
  img.loadPixels();
}

function draw() {
  jsfeat.imgproc.grayscale(img.pixels, img.width, img.height, buffer);
  jsfeat.imgproc.gaussian_blur(buffer, buffer, toolbar.blurSize(), 0);
  jsfeat.imgproc.canny(buffer, buffer, toolbar.lowThreshold(), toolbar.highThreshold());

  result = jsfeatToP5(buffer, result);
  image(result, toolbarWidth, 0);
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
