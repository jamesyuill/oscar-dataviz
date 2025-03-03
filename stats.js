class Stats {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.text;
  }

  show() {
    noStroke();
    fill(0);
    textSize(25);
    text(this.text, this.x, this.y);
  }
}
