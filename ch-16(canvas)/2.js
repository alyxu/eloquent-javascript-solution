const results = [
  { name: "Satisfied", count: 1043, color: "lightblue" },
  { name: "Neutral", count: 563, color: "lightgreen" },
  { name: "Unsatisfied", count: 510, color: "pink" },
  { name: "No comment", count: 175, color: "silver" },
];

let cx = document.querySelector("canvas").getContext("2d");
let total = results.reduce((sum, { count }) => sum + count, 0);
// Start at the top

let centerX = 300,
  centerY = 150;
let currentAngle = -0.5 * Math.PI;


results.forEach(function (result) {
  let sliceAngle = (result.count / total) * 2 * Math.PI;
  cx.beginPath();
  cx.arc(centerX, centerY, 100, currentAngle, currentAngle + sliceAngle);

  let middleAngle = currentAngle + 0.5 * sliceAngle;
  let textX = Math.cos(middleAngle) * 120 + centerX;
  let textY = Math.sin(middleAngle) * 120 + centerY;
  cx.textBaseLine = "middle";
  if (Math.cos(middleAngle) > 0) {
    cx.textAlign = "left";
  } else {
    cx.textAlign = "right";
  }
  cx.font = "15px sans-serif";
  cx.fillStyle = "black";
  cx.fillText(result.name, textX, textY);

  currentAngle += sliceAngle;
  cx.lineTo(centerX, centerY);
  cx.fillStyle = result.color;
  cx.fill();
});

for (let result of results) {
  let sliceAngle = (result.count / total) * 2 * Math.PI;
  cx.beginPath();
  // center=100,100, radius=100
  // from current angle, clockwise by slice's angle
  cx.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
  currentAngle += sliceAngle;
  cx.lineTo(100, 100);
  cx.fillStyle = result.color;
  cx.fill();
}
