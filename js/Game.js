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

        this.ball = new Ball();
        this.app.stage.addChild(this.ball.graphics);

        this.walls = new Wall();
        this.app.stage.addChild(this.walls.graphics);
        this.app.ticker.add((ticker) => {
        this.paddle.update(ticker.deltaTime);
        this.ball.update(ticker.deltaTime, this.paddle);
        });
    }
}