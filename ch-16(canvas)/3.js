let cx = document.querySelector("canvas").getContext("2d");

let lastTime = null;
function frame(time) {
  if (lastTime != null) {
    updateAnimation(Math.min(100, time - lastTime) / 1000);
  }
  lastTime = time;
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

let x = 50,
  y = 50,
  speedx = 50,
  speedy = 30,
  radius = 10;

function updateAnimation(step) {
  // Your code here.
  cx.clearRect(0,0,500,500);
  cx.strokeRect(10, 10, 400, 400);

  x += speedx * step;
  y += speedy * step;

  if (x < 10 + radius || x > 410 - radius) {
    speedx = -speedx;
  }
  if (y < 10 + radius || y > 410 - radius) {
    speedy = -speedy;
  }

  cx.beginPath();
  cx.arc(x, y, radius, 0, 7);
  cx.fill();
}
