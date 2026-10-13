class Wall{
    constructor() {
        this.graphics = new PIXI.Graphics();
        this.graphics.rect(0, 0, 10, 600);
        this.graphics.rect(790, 0, 10, 600);
        this.graphics.rect(0, 0, 800, 10);
        this.graphics.fill(0xffffff);
    }   
}