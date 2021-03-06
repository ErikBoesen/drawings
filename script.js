const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;

let ops = {
    padding: 10,
    size: 800,
    strokeCount: 25,
    strokeSpacing: 15
}

function resize() {
    canvas.width = ops.size + (2 * ops.padding);
    canvas.height = ops.size + (2 * ops.padding);
}

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

/*
function curve(anchorx, anchory, dirx, diry) {
    for (let i = 1; i < ops.strokeCount; i++) {
        line(anchorx, i * ops.strokeSpacing,
             anchorx +(ops.strokeCount - i) * ops.strokeSpacing, 0);
        line(anchorx + dirx * , anchory + diry
    }
}
*/

function draw() {
    resize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    // Draw square
    shape([[0, 0], [ops.size, 0], [ops.size, ops.size], [0, ops.size]]);

    for (let i = 1; i < ops.strokeCount; i++) {
        // Top left
        line(0, i * ops.strokeSpacing,
             (ops.strokeCount - i) * ops.strokeSpacing, 0);
        line((ops.size / 2), (ops.size / 2) - (i * ops.strokeSpacing),
             (ops.size / 2) - ((ops.strokeCount - i) * ops.strokeSpacing), (ops.size / 2));
        // Top right
        line(ops.size, i * ops.strokeSpacing,
             ops.size - ((ops.strokeCount - i) * ops.strokeSpacing), 0);
        line((ops.size / 2), (ops.size / 2) - (i * ops.strokeSpacing),
             (ops.size / 2) + (ops.strokeCount - i) * ops.strokeSpacing, (ops.size / 2));
        // Bottom left
        line(0, ops.size - (i * ops.strokeSpacing),
             (ops.strokeCount - i) * ops.strokeSpacing, ops.size);
        line((ops.size / 2), (ops.size / 2) + i * ops.strokeSpacing,
             (ops.size / 2) - ((ops.strokeCount - i) * ops.strokeSpacing), (ops.size / 2));
        // Bottom right
        line(ops.size, ops.size - (i * ops.strokeSpacing),
             ops.size - ((ops.strokeCount - i) * ops.strokeSpacing), ops.size);
        line((ops.size / 2), (ops.size / 2) + i * ops.strokeSpacing,
             (ops.size / 2) + (ops.strokeCount - i) * ops.strokeSpacing, (ops.size / 2));
    }

}

function updateLabel(input) {
    input.nextElementSibling.textContent = input.name + ' (' + input.value + ')';
}

for (let op in ops) {
    let input = document.getElementById(op);
    input.value = ops[op];
    updateLabel(input);
}

draw();

oninput = function(e) {
    ops[e.target.id] = parseInt(e.target.value);
    updateLabel(e.target);
    draw();
}
