
var canvas = document.getElementById('game');
// var ctx = canvas.getContext('2d');
var engine = new IV(canvas);

var BLOCK_SIZE = 20;
var FALL_SPEED = BLOCK_SIZE / 60;
var refPoint = 0
var centerPoint;

var width;
var height;

engine.setup((canvas) => {
    width = canvas.width;
    height = canvas.height;
})
var temp = 0;
var run = false;
engine.update((ctx) => {
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'black';

    if (!run) {
        // Get centerpoint by block type
        centerPoint = {
            x: width / 2,
            y: BLOCK_SIZE / 2
        }
        run = true;
    }

    ctx.fillRect(centerPoint.x - (BLOCK_SIZE/2) - BLOCK_SIZE, centerPoint.y - (BLOCK_SIZE / 2), BLOCK_SIZE, BLOCK_SIZE);
    ctx.strokeRect(centerPoint.x - (BLOCK_SIZE/2) - BLOCK_SIZE, centerPoint.y - (BLOCK_SIZE / 2), BLOCK_SIZE, BLOCK_SIZE);
    ctx.fillRect(centerPoint.x-(BLOCK_SIZE/2), centerPoint.y - (BLOCK_SIZE / 2), BLOCK_SIZE, BLOCK_SIZE);
    ctx.strokeRect(centerPoint.x-(BLOCK_SIZE/2), centerPoint.y - (BLOCK_SIZE / 2), BLOCK_SIZE, BLOCK_SIZE);
    ctx.fillRect(centerPoint.x+(BLOCK_SIZE/2), centerPoint.y - (BLOCK_SIZE / 2), BLOCK_SIZE, BLOCK_SIZE);
    ctx.strokeRect(centerPoint.x+(BLOCK_SIZE/2), centerPoint.y - (BLOCK_SIZE / 2), BLOCK_SIZE, BLOCK_SIZE);
    ctx.fillRect(centerPoint.x-(BLOCK_SIZE/2), BLOCK_SIZE + centerPoint.y - (BLOCK_SIZE / 2), BLOCK_SIZE, BLOCK_SIZE);
    ctx.strokeRect(centerPoint.x-(BLOCK_SIZE/2), BLOCK_SIZE + centerPoint.y - (BLOCK_SIZE / 2), BLOCK_SIZE, BLOCK_SIZE);
    temp += FALL_SPEED;
    if (temp >= BLOCK_SIZE && centerPoint.y + BLOCK_SIZE * 1.5 < height) {
        centerPoint.y += temp;
        temp = 0;
    }
})

engine.createKeyListener((key) => {
    switch(key){
        case KEYMAP.ARROW_UP:
            spin();
            break;
        case KEYMAP.ARROW_DOWN:
            break;
        case KEYMAP.ARROW_LEFT:
            centerPoint.x = (centerPoint.x > 0) ? centerPoint.x - BLOCK_SIZE : centerPoint.x;
            break;
        case KEYMAP.ARROW_RIGHT:
            centerPoint.x = (centerPoint.x + BLOCK_SIZE*3 < width) ? centerPoint.x + BLOCK_SIZE : centerPoint.x;
            break;
    }
});

const spin = () => {
        
}