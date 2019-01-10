const KEYMAP = {
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    UP: '',
    DOWN: '',
    LEFT: '',
    RIGHT: ''
}

class IV {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')
    }

    setup(action) {
        action(this.canvas, this.ctx);
    }

    /** 
     * The update function runs 60 times a second to update the canvas
     * 
     * @param action The callback action to be performed every frame
    */
    update(action) {
        setInterval(() => {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
            action(this.ctx)
        }, 16.667);
    }

    createKeyListener(action) {
        document.addEventListener('keydown', (evt) => {
            const { key } = evt;
            action(key, this.ctx, this.canvas);
        })
    }
}