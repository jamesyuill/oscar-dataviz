class Container {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.length = 300;
    this.width = 200;
  }

  draw() {
    stroke(0);
    strokeWeight(3);
    line(this.x - 2, this.y, this.x - 2, this.y + this.length);
    line(
      this.x - 2,
      this.y + 2 + this.length,
      this.x + 2 + this.width,
      this.y + 2 + this.length
    );
    line(
      this.x + 2 + this.width,
      this.y + this.length,
      this.x + 2 + this.width,
      this.y
    );
  }
}
