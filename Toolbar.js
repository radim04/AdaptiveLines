class Toolbar {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    noStroke();
    fill(50);
    rect(this.x, this.y, this.width, height);
    textSize(10);
    fill(200);
    text('Blur Size', this.x+10, this.y+15);
    this.sliderBlurSize = createSlider(1, 12, 4);
    this.sliderBlurSize.position(this.x+10, this.y+20);
    this.sliderBlurSize.style('width', '80px');
    text('Low Threshold', this.x+10, this.y+55);
    this.sliderLowThreshold = createSlider(0, 255, 30);
    this.sliderLowThreshold.position(this.x+10, this.y+60);
    this.sliderLowThreshold.style('width', '80px');
    text('High Threshold', this.x+10, this.y+95);
    this.sliderHighThreshold = createSlider(0, 255, 60);
    this.sliderHighThreshold.position(this.x+10, this.y+100);
    this.sliderHighThreshold.style('width', '80px');
  }
  blurSize() {
    return this.sliderBlurSize.value();
  }
  lowThreshold() {
    return this.sliderLowThreshold.value();
  }
  highThreshold() {
    return this.sliderHighThreshold.value();
  }
}
