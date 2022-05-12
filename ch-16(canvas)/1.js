function trapezoid(posx, posy) {
  let cx = document.querySelector("canvas").getContext("2d");
  cx.beginPath();
  cx.moveTo(posx + 25, posy);
  cx.lineTo(posx + 75, posy);
  cx.lineTo(posx + 100, posy + 50);
  cx.lineTo(posx, posy + 50);
  cx.lineTo(posx + 25, posy);
  cx.stroke();
}

function rdiam(posx, posy) {
  let cx = document.querySelector("canvas").getContext("2d");
  cx.beginPath();
  cx.moveTo(posx, posy);
  cx.lineTo(posx + 77, posy + 77);
  cx.lineTo(posx, posy + 154);
  cx.lineTo(posx - 77, posy + 77);
  cx.fill();
}

function zigzag(posx, posy) {
  let cx = document.querySelector("canvas").getContext("2d");
  cx.beginPath();
  cx.moveTo(posx, posy);
  for (let i = 1; i <= 10; i += 2) {
    console.log(i);
    cx.lineTo(posx + 100, posy + 15 * i);
    cx.lineTo(posx, posy + 15 * (i + 1));
  }
  cx.stroke();
}

function spiral(x, y) {
  let cx = document.querySelector("canvas").getContext("2d");
  let radius = 50,
    xCenter = x + radius,
    yCenter = y + radius;
  cx.beginPath();
  cx.moveTo(xCenter, yCenter);
  for (let i = 0; i < 300; i++) {
    let angle = (i * Math.PI) / 30;
    let dist = (radius * i) / 300;
    cx.lineTo(
      xCenter + Math.cos(angle) * dist,
      yCenter + Math.sin(angle) * dist
    );
  }
  cx.stroke();
}

function star(x, y) {
  let cx = document.querySelector("canvas").getContext("2d");
  let radius = 50,
    xCenter = x + radius,
    yCenter = y + radius;
  cx.beginPath();
  cx.moveTo(xCenter + radius, yCenter);
  for (let i = 1; i <= 8; i++) {
    let angle = (i * Math.PI) / 4;
    cx.quadraticCurveTo(
      xCenter,
      yCenter,
      xCenter + Math.cos(angle) * radius,
      yCenter + Math.sin(angle) * radius
    );
  }
  cx.fillStyle = "gold";
  cx.fill();
}
