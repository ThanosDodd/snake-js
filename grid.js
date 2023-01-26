function drawBoard() {
  for (var x = 0; x <= canvas.width; x += scale) {
    ctx.moveTo(0.5 + x, 0);
    ctx.lineTo(0.5 + x, canvas.height + scale);
  }

  for (var x = 0; x <= canvas.height; x += scale) {
    ctx.moveTo(0, 0.5 + x);
    ctx.lineTo(canvas.width + scale, 0.5 + x);
  }
  ctx.strokeStyle = "#3a4745";
  ctx.stroke();
}
