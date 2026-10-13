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
        this.brick = [];
        const row = 4;
        const column = 6;
        const brickWidth = 50;
        const brickHigh = 20;
        const gap = 5;
        const startX = 75;
        const startY = 70;
        for(let row = 0; row < rows; row++)
            { for(let col = 0; col < cols; col++)
                {
                    const x = startX + col * (brickWidth + gap);
                    const y = startY + row * (brickHigh + gap);
                    const brick = new Brick(x,y);
                    this.app.stage.addChild(brick.graphics)
                    this.bricks.push(brick)
                }

             }
        this.app.ticker.add((ticker) => {
        this.paddle.update(ticker.deltaTime);
        this.ball.update(ticker.deltaTime, this.paddle);


        });
    }
}