class Game{
    constructor(){
        this.app = new PIXI.Application();
        this.score = 0;
        this.highScore = Number(localStorage.getItem("arkanoidHighscore")) || 0;
        this.gameOver = false;
    }
    async init(){
        await this.app.init({
            width: 800,
            height: 600,
            backgroundColor: 0x336699
        });
        
        document.getElementById('game').appendChild(this.app.canvas);
        this.scoreText = new PIXI.Text({
            text: "SCORE: 0",
            style: {
                fontSize: 24,
                fill: 0xffffff

            }
        });
        this.scoreText.x = 20;
        this.scoreText.y = 20;
        this.app.stage.addChild(this.scoreText);
        this.paddle = new Paddle();
        this.app.stage.addChild(this.paddle.graphics);

        this.ball = new Ball();
        this.app.stage.addChild(this.ball.graphics);

        this.walls = new Wall();
        this.app.stage.addChild(this.walls.graphics);
        this.bricks = [];
        const rows = 6;
        const cols = 11;
        const brickWidth = 50;
        const brickHigh = 20;
        const gap = 10;
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
            if (this.gameOver) return;

            this.paddle.update(ticker.deltaTime);

            const points = this.ball.update(
                ticker.deltaTime,
                this.paddle,
                this.bricks
            );

            if (points) {
                this.score += points;
                this.scoreText.text = "SCORE: " + this.score;
            }

            if (this.ball.graphics.y - 10 > 600) {
                this.gameOver = true;

                if (this.score > this.highScore) {
                    this.highScore = this.score;
                    localStorage.setItem("arkanoidHighscore", this.highScore);
                }

                    this.app.stop();

                    document.getElementById("game").style.display = "none";
                    document.getElementById("menu").style.display = "block";

                    document.querySelector(".header_titlevalue").textContent =
                        String(this.score).padStart(5, "0");

                    document.querySelector(".header_scorevalue").textContent =
                        String(this.highScore).padStart(5, "0");
            }
        });
    }
}
    
    