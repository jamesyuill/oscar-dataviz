class Block {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 10;
  }

  draw() {
    strokeWeight(1);
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
  }
}
