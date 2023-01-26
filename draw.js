const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const scale = 20;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;
var fruit;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();

  fruit.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    snake.update();
    snake.draw();
    fruit.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }

    snake.checkCollision();

    document.querySelector(".score").innerText = snake.total;
    document.querySelector(".maxScore").innerText = "Current Max:" + snake.max;
  }, 190);
})();

window.addEventListener("keydown", (evt) => {
  const direction = evt.key.replace("Arrow", "");
  snake.changeDirection(direction);
});
