class Box {
  constructor(x, y, z, radius) {
    this.vector = createVector(x, y, z);
    this.radius = radius;
  }

  generate() {
    let boxes = [];
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        for (let z = -1; z < 2; z++) {
          let sum = abs(x) + abs(y) + abs(z);
          let newR = this.radius / 3;
          if (sum <= 1) {
            let box = new Box(
              this.vector.x + x * newR,
              this.vector.y + y * newR,
              this.vector.z + z * newR,
              newR
            );
            boxes.push(box);
          }
        }
      }
    }
    return boxes;
  }

  display() {
    push();
    translate(this.vector.x, this.vector.y, this.vector.z);
    
    // Flashy rainbox flickering
    fill(floor(random(0, 255)), floor(random(0, 255)), floor(random(0, 255)));

    box(this.radius);
    pop();
  }
}
