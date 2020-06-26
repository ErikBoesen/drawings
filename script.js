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

function line(xa, ya, xb, yb) {
    ctx.moveTo(ops.padding + xa, ops.padding + ya);
    ctx.lineTo(ops.padding + xb, ops.padding + yb);
    ctx.stroke();
}

function shape(points) {
    for (let i = 1; i < points.length; i++) {
        let a = points[i - 1],
            b = points[i];
        line(a[0], a[1], b[0], b[1]);
    }
    line(points[points.length - 1][0], points[points.length - 1][1],
         points[0][0], points[0][1]);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    // Draw square
    shape([[0, 0], [ops.size, 0], [ops.size, ops.size], [0, ops.size]]);

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
