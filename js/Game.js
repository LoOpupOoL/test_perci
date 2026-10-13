class Game{
    constructor(){
        this.app = new PIXI.Application();
    }
    async init(){
        await this.app.init({
            width: 800,
            height: 600,
            backgroundColor: 0x336699
        });
        document.getElementById('game').appendChild(this.app.canvas);
        const paddle = new PIXI.Graphics();
        paddle.rect(0, 0, 100, 20);
        paddle.fill(0xffffff);
        paddle.x = 350;
        paddle.y = 580;
        this.app.stage.addChild(paddle);
        const ball = new PIXI.Graphics();
        ball.circle(0, 0, 10);
        ball.fill(0xffffff);
        ball.x = 400;
        ball.y = 570;
        this.app.stage.addChild(ball);

        const walls = new PIXI.Graphics();
        walls.rect(0, 0, 20, 600);
        walls.fill(0xffffff);
        this.app.stage.addChild(walls);
    }
}