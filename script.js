const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
currentPath = null;

const PADDING = 10;
const DRAWING_SIZE = 800;
const NUM_STROKES = 30;
const GAP = 20;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    ctx.moveTo(0, 0);
    ctx.lineTo(DRAWING_SIZE, 0);
    ctx.lineTo(DRAWING_SIZE, DRAWING_SIZE);
    ctx.lineTo(0, DRAWING_SIZE);
    ctx.lineTo(0, 0);
    ctx.stroke();

    // Top left
    for (let i = 1; i <= NUM_STROKES; i++) {
        ctx.moveTo(0, i * GAP);
        ctx.lineTo((NUM_STROKES - i) * GAP, 0);
        ctx.stroke();
    }
    // Top right
    for (let i = 1; i <= NUM_STROKES; i++) {
        ctx.moveTo(DRAWING_SIZE, i * GAP);
        ctx.lineTo(DRAWING_SIZE - ((NUM_STROKES - i) * GAP), 0);
        ctx.stroke();
    }
    // Bottom left
    for (let i = 1; i <= NUM_STROKES; i++) {
        ctx.moveTo(0, DRAWING_SIZE - (i * GAP));
        ctx.lineTo((NUM_STROKES - i) * GAP, DRAWING_SIZE);
        ctx.stroke();
    }
    // Bottom right
    for (let i = 1; i <= NUM_STROKES; i++) {
        ctx.moveTo(DRAWING_SIZE, DRAWING_SIZE - (i * GAP));
        ctx.lineTo(DRAWING_SIZE - ((NUM_STROKES - i) * GAP), DRAWING_SIZE);
        ctx.stroke();
    }
}

draw();

/*
setInterval(function() {
    move();
    draw();
}, 10);
*/
