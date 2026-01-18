let table, totalRows, names;
let test;
let elementIndex = 2;
let elements = [];
let canvas;

function preload() {
  table = loadTable("OctoberEvents.csv", "csv", "header");
  // let element0 = loadImage("img/October/mushrooms.png");
  // let element1 = loadImage("img/October/walnut.png");
  // let element2 = loadImage("img/October/apostaksi.png");
  // let element3 = loadImage("img/October/elies.png");
  // let element4 = loadImage("img/October/pinelia1.png");
  // let element5 = loadImage("img/October/pinelia2.png");
  // let element6 = loadImage("img/October/figs.png");
  // let element7 = loadImage("img/October/pinelia.png");
  // let element8 = loadImage("img/October/pinelia6.png");
  // let element9 = loadImage("img/October/pinelia6.png");

    let element0 = loadImage("img/November/November(1).jpg");
  let element1 = loadImage("img/November/November(2).jpg");
  let element2 = loadImage("img/November/November(3).jpg");


  elements = [
    element0,
    element1,
    element2,
    // element3,
    // element4,
    // element5,
    // element6,
    // element7,
    // element8,
  ];
}

function setup() {
  // noCanvas(); // Do not create a canvas

  canvas = createCanvas(windowWidth / 2, windowHeight);
  canvas.parent(document.querySelector(".calendar-layout"));

  // Select the seasonal-list div
  let seasonalDiv = select("#seasonal-list");

  //FRUITS

  // Add a title above the list
  // createElement('h3', 'Fruits').parent(seasonalDiv);

  // Create a list and add it to the seasonal-list div
  let fruitList = createElement("ul");
  fruitList.parent(seasonalDiv);

  for (let i = 0; i < table.getRowCount(); i++) {
    let fruit = table.getString(i, "Fruits");
    if (fruit && fruit.trim() !== "") {
      createElement("li", fruit).parent(fruitList);
    }
  }

  //VEGETABLES

  // Add a title above the list
  // createElement('h3', 'Vegetables').parent(seasonalDiv);

  // Create a list and add it to the seasonal-list div
  let vegetableList = createElement("ul");
  vegetableList.parent(seasonalDiv);

  for (let i = 0; i < table.getRowCount(); i++) {
    let vegetable = table.getString(i, "Vegetables");
    if (vegetable && vegetable.trim() !== "") {
      createElement("li", vegetable).parent(vegetableList);
    }
  }

  //fauna

  // Add a title above the list
  // createElement('h3', 'Fauna').parent(seasonalDiv);

  // Create a list and add it to the seasonal-list div
  let faunaList = createElement("ul");
  faunaList.parent(seasonalDiv);

  for (let i = 0; i < table.getRowCount(); i++) {
    let fauna = table.getString(i, "Fauna");
    if (fauna && fauna.trim() !== "") {
      createElement("li", fauna).parent(faunaList);
    }
  }

  // Create a list and add it to the seasonal-list div
  let celebrationsList = createElement("ul");
  celebrationsList.parent(seasonalDiv);

  for (let i = 0; i < table.getRowCount(); i++) {
    let celebration = table.getString(i, "Celebrations");
    if (celebration && celebration.trim() !== "") {
      createElement("li", celebration).parent(celebrationsList);
    }
  }

  //button to redraw
  let redrawBtn = select("#redraw");

  // let redrawBtn = createButton("Redraw Canvas");
  redrawBtn.mousePressed(() => {
    clear();
    redraw();
  });

  // Observe calendar-layout resize and adjust canvas
  const calendarLayout = document.querySelector(".calendar-layout");
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const w = entry.contentRect.width;
      const h = entry.contentRect.height;
      resizeCanvas(w, h);
      clear();
      redraw();
    }
  });
  resizeObserver.observe(calendarLayout);
}

function draw() {
  imageMode(CENTER);
  blendMode(MULTIPLY);
  background(255, 255, 255, 100); // Light background with low opacity

  let numberOfElements = int(random(1, elements.length));

  for (i = 0; i < numberOfElements; i++) {
    tint(255, random(0, 250)); // Apply transparency to the image

    // scale(random(0.5, 1.5));
    // translate(random(canvas.width), random(height));
    // // image(elements[i], 0, 0, elements[i].width, elements[i].height);

    // Calculate scale to fit canvas width
    let img = elements[i];
    let scale = width / img.width;
    let newWidth = width;
    let newHeight = img.height * scale;

    // Draw image centered horizontally, random vertically
    let x = random(newWidth / 10, width - newWidth / 10);
    let y = random(-newHeight / 3, height - newHeight / 3);

    image(img, x, y, newWidth, newHeight);
  }

  noLoop();

  console.log("draw" + elements[3].width, elements[3].height);
}
