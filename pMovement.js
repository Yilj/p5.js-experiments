var player;

function setup() {
  createCanvas(600,600);
  player = new pObject();
}

function draw() {
  background(51);
  player.update();
  player.draw();
  player.addFriction(0.05);

  if (keyIsDown(87)) {
    player.addForce(createVector(0, -1));
  }
  if (keyIsDown(83)) {
    player.addForce(createVector(0, 1));
  }
  if (keyIsDown(65)) {
    player.addForce(createVector(-1, 0));
  }
  if (keyIsDown(68)) {
    player.addForce(createVector(1, 0));
  }
}


function pObject() {
  this.position = createVector(300, 300);
  this.velocity = createVector(0, 0);
  this.force = createVector(0, 0);

  this.update = function() {
    this.position.add(this.velocity);
    this.velocity.add(this.force);
    this.force.mult(0);
  }

  this.draw = function() {
    noStroke();
    fill(150);
    ellipse(this.position.x, this.position.y, 20, 20);
  }

  this.addForce = function(pForce) {
    this.force.add(pForce);
  }

  this.addFriction = function(amount) {
    //this.velocity.mult(amount);
    player.addForce(createVector(player.velocity.x * -amount, (player.velocity.y * -amount )));
  }
}
