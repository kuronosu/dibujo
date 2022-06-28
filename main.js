let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "bisque";
ctx.arc(200, 50, 30, 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "#ffaaaa";
ctx.lineWidth = 3;
ctx.arc(200, 50, 20, 0, Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "brown";
ctx.arc(190, 45, 3, 0, Math.PI * 2, true);
ctx.fill();
ctx.arc(210, 45, 3, 0, Math.PI * 2, true);
ctx.fill();
