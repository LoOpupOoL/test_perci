class Game{
    constructor(){
        this.app = new PIXI.Application();
    }
    async init(){
        await this.app.init({
            width: 800,
            height: 600,
            backgroundColor: 336699
        });
        document.getElementById('game').appendChild(this.app.canvas);
        const paddle = new PIXI.Graphics();
        paddle.fill(0xffffff);
        paddle.drawRect(0, 0, 100, 20);
        paddle.x = 350;
        paddle.y = 580;
        this.app.stage.addChild(paddle);
    }
}