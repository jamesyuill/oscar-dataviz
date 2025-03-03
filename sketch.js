let leftContainer, rightContainer;
let leftGrid, rightGrid;
let counterW = 0;
let counterM = 0;
let building = false;
let dataIndex = 0;
let stats;

function setup() {
  createCanvas(800, 600);
  leftContainer = new Container(100, 200);
  rightContainer = new Container(500, 200);
  leftGrid = new Grid(leftContainer);
  rightGrid = new Grid(rightContainer);
  stats = new Stats(373, 200);
}

function draw() {
  background(220);

  noStroke();
  textSize(30);
  text('Oscar Nominations by Gender', 200, 50);
  textSize(20);
  text('Women', 163, 530);
  text('Men', 583, 530);

  leftContainer.draw();
  rightContainer.draw();
  leftGrid.update();
  rightGrid.update();
  stats.show();

  if (dataIndex < data.length) {
    if (frameCount % 200 === 0) {
      building = true;
    }

    if (frameCount % 250 === 0) {
      building = false;
      dataIndex++;
      counterW = 0;
      counterM = 0;
    }

    if (building) {
      stats.text = data[dataIndex].year;

      if (counterW < data[dataIndex].women) {
        leftGrid.addBlock();
        counterW++;
      }
      if (counterM < data[dataIndex].men) {
        rightGrid.addBlock();
        counterM++;
      }
    }
  }
}
