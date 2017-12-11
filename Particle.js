class Particle {
  constructor()
  {
    this.damping = 0.777;
    this.gravity = 0.98;
    this.drops = [];
    this.x = 500;
    this.y = app.canvas.height - app.enemies.height;
    this.oldX = 500;
    this.oldY = app.canvas.height - app.enemies.height;
  }
  Init() {
    var velocity = this.getVelocity();
    
   this.oldX = this.x;
   this.oldY = this.y;
   this.x += velocity.x * this.damping;
   this.y += velocity.y * this.damping;
  }
  getVelocity() {
    return {
      x: this.x - this.oldX,
      y: this.y - this.oldY
    }
  }
  move(x, y) {
    this.x += x;
    this.y += y;
  }
  bounce() {
    if (this.y > app.canvas.height-100) {
      var velocity = this.getVelocity();
      this.oldY = app.canvas.height-10;
      this.y = this.oldY - velocity.y * 2;
      console.log("Bounce");
    }
  }
  draw() {
    app.ctx.strokeStyle = '#ff0000';
    app.ctx.lineWidth = 3;
    app.ctx.beginPath();
    app.ctx.moveTo(this.oldX, this.oldY);
    app.ctx.lineTo(this.x, this.y);
    app.ctx.stroke();
  }
  update()
  {
      for (var j = 0; j < 5; j++) {

      // "stop" the water after 1000 drops
      if (this.drops.length < 200) {
        var drop = new Particle(app.canvas.width*0.5, app.canvas.height);

        // up and a little to the left or right
        drop.move(Math.random() * 30 -15, Math.random() * -2 - 15);
        this.drops.push(drop);
      }
    }
    for (var i = 0; i < this.drops.length; i++) {
      this.drops[i].move(0, this.gravity);    // add a downward force
      this.drops[i].Init();         // move based on current velocity
      this.drops[i].bounce(); 
      this.drops[i].draw();           // check y against the ground
    }

}
};