class Grid {
  constructor(container) {
    this.blockArray = [];
    this.container = container;
    this.width = container.width + container.x;
    this.startX = container.x;
    this.startY = container.length + container.y - 10;
  }

  addBlock(person) {
    let color = person.winner ? 'red' : 'yellow';

    this.blockArray.push(new Block(this.startX, this.startY, color));
    this.startX += 10;
    if (this.startX >= this.width) {
      this.startY -= 10;
      this.startX = this.container.x;
    }
  }

  update() {
    if (this.blockArray.length) {
      this.blockArray.forEach((block) => {
        block.draw();
      });
    }
  }
}
