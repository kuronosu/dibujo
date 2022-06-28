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


ctx.beginPath();
ctx.moveTo(200, 80);
ctx.lineTo(200, 180);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#ff0000"
ctx.moveTo(200, 110);
ctx.lineTo(130, 110);
ctx.lineTo(120, 120);
ctx.moveTo(200, 110);
ctx.lineTo(280, 110);
ctx.lineTo(290, 100);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "navy";
ctx.moveTo(200, 180);
ctx.lineTo(150, 280);
ctx.lineTo(130, 280);
ctx.moveTo(200, 180);
ctx.lineTo(250, 280);
ctx.lineTo(270, 280);
ctx.stroke();