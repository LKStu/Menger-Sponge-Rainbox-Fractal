// Rotating angle
var a = 0;
var b = 0;

// Sponge
var sponge = [];

function setup() {
  createCanvas(800, 800, WEBGL);

  normalMaterial();

  frameRate(30);

  // Fill Sponge
  var box = new Box(0, 0, 0, 400);
  sponge.push(box);
}

// Generating new generations of boxes
function mousePressed() {
  var next = [];
  for (var i = 0; i < sponge.length; i++) {
    var box = sponge[i];
    var newBoxes = box.generate();
    next = next.concat(newBoxes);
  }
  sponge = next;
}

function draw() {
  background(70);
  stroke(255);

  rotateX(a);
  rotateY(a);
  rotateZ(a * 0.2);

  // Displaying the boxes
  for (var i = 0; i < sponge.length; i++) {
    sponge[i].display();
  }

  a += 0.02;
}
