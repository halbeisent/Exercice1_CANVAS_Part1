var houseDraw = document.getElementById('houseCanvas');
var drawProcess = houseDraw.getContext('2d');
console.log(houseDraw, drawProcess);
// Je commence par tracer les lignes du toit
drawProcess.beginPath();
drawProcess.moveTo(200,0);
drawProcess.lineTo(300,120);
drawProcess.lineTo(100,120);
drawProcess.lineTo(200,0);
drawProcess.fillStyle = '#d08345';
drawProcess.fill();
// Je trace ensuite les contours de la maison
drawProcess.beginPath();
drawProcess.moveTo(100,120);
drawProcess.lineTo(100,350);
drawProcess.lineTo(300,350);
drawProcess.lineTo(300,120);
drawProcess.fillStyle = '#a8d7e5';
drawProcess.fill();
// La porte
drawProcess.beginPath();
drawProcess.moveTo(170,350);
drawProcess.lineTo(170,280);
drawProcess.lineTo(230,280);
drawProcess.lineTo(230,350);
drawProcess.fillStyle = '#c9c9c9';
drawProcess.fill();
// La première fenêtre
drawProcess.beginPath();
drawProcess.moveTo(120,140);
drawProcess.lineTo(120,180);
drawProcess.lineTo(160,180);
drawProcess.lineTo(160,140);
drawProcess.lineTo(120,140);
drawProcess.fillStyle = '#c9c9c9';
drawProcess.fill();
// Puis la secondedrawProcess.beginPath();
drawProcess.moveTo(240,140);
drawProcess.lineTo(240,180);
drawProcess.lineTo(280,180);
drawProcess.lineTo(280,140);
drawProcess.lineTo(240,140);
drawProcess.fillStyle = '#c9c9c9';
//Puis on fait les contours
drawProcess.fill();
