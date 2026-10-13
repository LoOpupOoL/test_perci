class Brick{
    constructor(x, y){
        this.graphics = new PIXI.Graphics();
        this.width = 50;
        this.height = 20;
        this.graphics.rect(0, 0, this.width, this.height);
        this.graphics.fill(0xffffff);
        this.graphics.x = x;
        this.graphics.y = y;
    }

    

    

}