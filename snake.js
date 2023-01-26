function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];
  this.max = 0;

  this.draw = function () {
    for (let i = 0; i < this.tail.length; i++) {
      ctx.strokeStyle = "#3a4745";
      ctx.strokeRect(this.tail[i].x, this.tail[i].y, scale, scale);
      ctx.fillStyle = "#f6ff00";
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.strokeStyle = "#3a4745";
    ctx.strokeRect(this.x, this.y, scale, scale);
    ctx.fillStyle = "#237ed3";
    ctx.fillRect(this.x, this.y, scale, scale);
  };

  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    this.tail[this.total - 1] = {
      x: this.x,
      y: this.y,
    };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width - scale) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = canvas.width - scale;
    }
    if (this.y > canvas.height - scale) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = canvas.height - scale;
    }
  };

  this.changeDirection = function (direction) {
    switch (direction) {
      case "Up":
        if (this.ySpeed != 10) {
          this.xSpeed = 0;
          this.ySpeed = -scale * 1;
        }
        break;
      case "Down":
        if (this.ySpeed != -10) {
          this.xSpeed = 0;
          this.ySpeed = scale * 1;
        }
        break;
      case "Right":
        if (this.xSpeed != -10) {
          this.xSpeed = scale * 1;
          this.ySpeed = 0;
        }
        break;
      case "Left":
        if (this.xSpeed != 10) {
          this.xSpeed = -scale * 1;
          this.ySpeed = 0;
        }
        break;
    }
  };

  this.eat = function (fruit) {
    if (this.x === fruit.x && this.y === fruit.y) {
      playRandom();
      this.total++;
      if (this.total > this.max) {
        this.max = this.total;
      }
      return true;
    }
    return false;
  };

  this.checkCollision = function () {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.total = 0;
        this.tail = [];
        var death = new Audio("public/death.mp3");
        death.play();
        start_strobe();
        setTimeout(function () {
          stop_strobe();
        }, 1000);
      }
    }
  };
}

function playRandom() {
  // in case other tracks are added
  // var chooseTrack = String(Math.floor(Math.random() * 6 + 1));
  var chooseTrack = "1";
  switch (chooseTrack) {
    case "1":
      var beep = new Audio("public/beep.mp3");
      beep.play();
      break;
  }
}
