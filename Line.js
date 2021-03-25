const minSegmentLength = 1;
const avgSegmentLength = 3;
const maxSegmentLength = 5;
class Line {
  constructor(x1, y1, x2, y2) {
    this.vertices = [];
    var path = g.line(x1, y1, x2, y2);
    path = g.resampleByLength(path, avgSegmentLength);
    for(var i=0; i<path.commands.length; i++) {
      var pnt = path.commands[i];
      var lineVertex = new LineVertex(pnt.x, pnt.y);
      this.vertices.push(lineVertex);
    }
  }
  display() {
    strokeWeight(0.1);
    stroke(0);
    beginShape();
    for(var i=0; i<this.vertices.length; i++) {
      vertex(this.vertices[i].pos.x, this.vertices[i].pos.y);
    }
    endShape();
  }
}
