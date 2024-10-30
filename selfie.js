function setup() {
  createCanvas(400, 400);
  background(154, 225, 255);

  // Colors
  skin = color(255, 233, 208); // Skin color
  brownHair = color(139, 69, 19); // Brown hair color
  brownEyes = color(139, 69, 19); // Brown eyes color
  blush = color(255, 146, 136); // Blush color
  white = color(255, 255, 255); // White for highlights

  // Functions
  Face();
  Blush();
  Eyes();
  Nose();
  Highlights();
  Hair();
}

function Face() {
  fill(skin);
  noStroke();

  beginShape();
  vertex(width * 0.6, height * 0.2);
  vertex(width * 0.3, height * 0.35);
  vertex(width * 0.2, height * 0.55);
  vertex(width * 0.25, height * 0.7);
  vertex(width * 0.35, height * 0.8);
  vertex(width * 0.5, height * 0.85);
  vertex(width * 0.65, height * 0.85);
  vertex(width * 0.75, height * 0.8);
  vertex(width * 0.8, height * 0.7);
  vertex(width * 0.85, height * 0.5);
  vertex(width * 0.75, height * 0.3);
  endShape(CLOSE);
}

function Blush() {
  fill(blush);
  noStroke();
  // Positioned wider apart
  circle(width * 0.35, height * 0.58, width * 0.15); // Left cheek
  circle(width * 0.65, height * 0.58, width * 0.15); // Right cheek
}

function Hair() {
  fill(brownHair);
  noStroke();

  beginShape();
  vertex(width * 0.6, height * 0.2);
  vertex(width * 0.35, height * 0.4);
  vertex(width * 0.3, height * 0.7);
  vertex(width * 0.45, height * 0.95);
  vertex(width * 0.25, height * 0.95);
  vertex(width * 0.15, height * 0.8);
  vertex(width * 0.1, height * 0.6);
  vertex(width * 0.15, height * 0.3);
  vertex(width * 0.35, height * 0.1);
  vertex(width * 0.7, height * 0.1);
  vertex(width * 0.85, height * 0.3);
  vertex(width * 0.95, height * 0.6);
  vertex(width * 0.9, height * 0.9);
  vertex(width * 0.75, height * 0.95);
  vertex(width * 0.8, height * 0.75);
  vertex(width * 0.82, height * 0.55);
  vertex(width * 0.8, height * 0.4);
  endShape(CLOSE);
}

function Eyes() {
  fill(brownEyes); // Brown color for the eyes
  noStroke();
  
  // Left eye positioned a little higher
  circle(width * 0.4, height * 0.52, width * 0.1);

  // Right eye positioned a little higher
  circle(width * 0.6, height * 0.52, width * 0.1); // Adjusted position for symmetry
}

function Highlights() {
  fill(white);
  
  // Left highlight
  circle(width * 0.42, height * 0.49, width * 0.03);
  
  // Right highlight
  circle(width * 0.62, height * 0.49, width * 0.03); // Adjusted position for symmetry
}

function Nose() {
  fill(blush);
  noStroke();
  
  circle(width * 0.5, height * 0.57, width * 0.06); // Centered nose
}

function draw() {
  // Call the setup function
  setup();
}
