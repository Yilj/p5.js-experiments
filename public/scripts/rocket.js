function rocket() {
    this.lPos = createVector(width / 2, height / 2);
    this.lVel = createVector(0, 0);
    this.lAcc = createVector(0, 0);

    this.aPos = 0;
    this.aVel = 0;
    this.aAcc = 0;

    this.size = 20;

    this.update = function() {
        this.lVel.add(this.lAcc);
        this.lPos.add(this.lVel);
        this.lAcc.mult(0);

        this.aVel += this.aAcc;
        this.aPos += this.aVel;
        this.aAcc = 0;

        this.damping(0.05, 0.08);
    }

    this.render = function() {
        push();
        translate(this.lPos.x, this.lPos.y);
        rotate(this.aPos);
        triangle(-this.size, this.size, this.size, this.size, 0, -this.size);
        pop();
    }

    this.addlAcc = function(amount) {
        this.lAcc.add(p5.Vector.fromAngle(this.aPos + PI / 2).mult(amount));
    }

    this.addaAcc = function(amount) {
        this.aAcc += amount;
    }

    this.damping = function(lAmount, aAmount) {
        this.lAcc.add(createVector(this.lVel.x * -lAmount, this.lVel.y * -lAmount));
        this.aAcc -= this.aVel * aAmount;
    }
}
