class Ball{
    constructor() {
        this.graphics = new PIXI.Graphics();
        this.graphics.circle(0, 0, 10);
        this.graphics.fill(0xffffff);
        this.graphics.x = 400;
        this.graphics.y = 570;
    }
}