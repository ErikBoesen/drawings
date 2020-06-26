const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
currentPath = null;

let ops = {
    padding: 10,
    size: 800,
    strokeCount: 30,
    strokeSpacing: 20
}

canvas.width = canvas.height = ops.size + (2 * ops.padding);


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    ctx.moveTo(0, 0);
    ctx.lineTo(ops.size, 0);
    ctx.lineTo(ops.size, ops.size);
    ctx.lineTo(0, ops.size);
    ctx.lineTo(0, 0);
    ctx.stroke();

    // Top left
    for (let i = 1; i <= ops.strokeCount; i++) {
        ctx.moveTo(0, i * ops.strokeSpacing);
        ctx.lineTo((ops.strokeCount - i) * ops.strokeSpacing, 0);
        ctx.stroke();
    }
    // Top right
    for (let i = 1; i <= ops.strokeCount; i++) {
        ctx.moveTo(ops.size, i * ops.strokeSpacing);
        ctx.lineTo(ops.size - ((ops.strokeCount - i) * ops.strokeSpacing), 0);
        ctx.stroke();
    }
    // Bottom left
    for (let i = 1; i <= ops.strokeCount; i++) {
        ctx.moveTo(0, ops.size - (i * ops.strokeSpacing));
        ctx.lineTo((ops.strokeCount - i) * ops.strokeSpacing, ops.size);
        ctx.stroke();
    }
    // Bottom right
    for (let i = 1; i <= ops.strokeCount; i++) {
        ctx.moveTo(ops.size, ops.size - (i * ops.strokeSpacing));
        ctx.lineTo(ops.size - ((ops.strokeCount - i) * ops.strokeSpacing), ops.size);
        ctx.stroke();
    }
}

draw();

oninput = function(e) {
    ops[e.target.id] = e.target.value;
    draw();
}
/*
setInterval(function() {
    move();
    draw();
}, 10);
*/
