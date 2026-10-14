class Brick{
    constructor(x, y, color = 0xffffff){
        this.graphics = new PIXI.Graphics();
        this.width = 50;
        this.height = 20;
        this.graphics.rect(2, 2, this.width - 4, this.height - 4);
        this.graphics.fill(color)
        this.graphics.x = x;
        this.graphics.y = y;
    }

    

    

}