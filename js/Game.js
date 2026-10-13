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
        this.paddle = new Paddle();
        this.app.stage.addChild(this.paddle.graphics);

        const ball = new PIXI.Graphics();
        ball.circle(0, 0, 10);
        ball.fill(0xffffff);
        ball.x = 400;
        ball.y = 570;
        this.app.stage.addChild(ball);

        const walls = new PIXI.Graphics();
        walls.rect(0, 0, 10, 600);
        walls.rect(780, 0, 10, 600);
        walls.rect(0, 0, 800, 10);
        walls.fill(0xffffff);
        this.app.stage.addChild(walls);
    }
}