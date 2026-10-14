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
            backgroundColor: 0x080808
        });
        
        document.getElementById('game').appendChild(this.app.canvas);
        this.scoreText = new PIXI.Text({
            text: "SCORE: 0",
            style: {
                fontSize: 24,
                fill: 0xffffff,
                fontFamily:"8bit"

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
        const rows = 1;
        const cols = 1;
        const brickWidth = 50;
        const brickHigh = 20;
        const gap = 10;
        const startX = 75;
        const startY = 70;
        const colors = [0xff3333, 0xff8833, 0xffdd33, 0x33cc66, 0x33bbff, 0x5555ff]
        for(let row = 0; row < rows; row++)
            { for(let col = 0; col < cols; col++)
                {
                    const x = startX + col * (brickWidth + gap);
                    const y = startY + row * (brickHigh + gap);
                    const brick = new Brick(x,y, colors[row]);
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
            if (this.bricks.length === 0) {
                this.gameOver = true;

                gameMusic.pause();
                gameMusic.currentTime = 0;

                // Сохраняем рекорд
                if (this.score > this.highScore) {
                    this.highScore = this.score;
                    localStorage.setItem("arkanoidHighscore", this.highScore);
                }

                // Останавливаем игру
                this.app.stop();

                // Надпись о победе
                const winText = new PIXI.Text({
                    text: "YOU WON!",
                    style: {
                        fontFamily: "8bit",
                        fontSize: 48,
                        fill: 0xffdd33,
                        align: "center"
                    }
                });

                winText.anchor.set(0.5);
                winText.x = 400;
                winText.y = 300;

                this.app.stage.addChild(winText);

                // Возвращаемся в меню через 3 секунды
                setTimeout(() => {
                    document.getElementById("game").style.display = "none";
                    document.getElementById("menu").style.display = "block";

                    document.querySelector(".header_titlevalue").textContent =
                        String(this.score).padStart(5, "0");

                    document.querySelector(".header_scorevalue").textContent =
                        String(this.highScore).padStart(5, "0");
                }, 3000);

                return;
            }

            if (this.ball.graphics.y - 10 > 600) {
                this.gameOver = true;
                gameMusic.pause();
                gameMusic.currentTime = 0;

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
    
    