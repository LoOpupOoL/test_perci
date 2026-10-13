class Ball{
    constructor() {
        this.graphics = new PIXI.Graphics();
        this.graphics.circle(0, 0, 10);
        this.graphics.fill(0xffffff);
        this.graphics.x = 400;
        this.graphics.y = 540;
        this.speedX = 3;
        this.speedY = -4;
    }
    update(deltaTime, paddle, bricks){
        this.graphics.x += this.speedX * deltaTime;
        this.graphics.y += this.speedY * deltaTime;
        const radius = 10;
        const wallsize = 10;
        const fielWidth = 800;

        if (this.graphics.x - radius <= wallsize){
            this.graphics.x = wallsize + radius;
            this.speedX = Math.abs(this.speedX)
        }
        if (this.graphics.x + radius >= fielWidth - wallsize){
            this.graphics.x = fielWidth - wallsize - radius;
            this.speedX = -Math.abs(this.speedX)
        }
        if (this.graphics.y - radius <= wallsize){
            this.graphics.y = wallsize + radius;
            this.speedY = Math.abs(this.speedY)
        }
        const ballBottom = this.graphics.y + radius
        const ballRight = this.graphics.x + radius
        const ballLeft = this.graphics.x - radius
        const ballTop = this.graphics.y - radius

        const paddleTop = paddle.graphics.y
        const paddleLeft = paddle.graphics.x
        const paddleRight = paddle.graphics.x + paddle.width

        if(
            this.speedY > 0 &&
            ballBottom >= paddleTop &&
            ballBottom - this.speedY * deltaTime <= paddleTop &&
            ballRight > paddleLeft &&
            ballLeft < paddleRight

        )
        {
            this.graphics.y = paddleTop - radius;
            this.speedY = -Math.abs(this.speedY)
            const paddleCentre = paddle.graphics.x + paddle.width/2;
            const hit = this.graphics.x - paddleCentre;
            const normHit = hit / (paddle.width/2);
            this.speedX = normHit * 5
        }
                
            for (const brick of bricks) {
            const bricks = 20;
            const brickLeft = brick.graphics.x;
            const brickRight = brick.graphics.x + brick.width;
            const brickTop = brick.graphics.y;
            const brickBottom = brick.graphics.y + brick.height;

            if (
            ballRight > brickLeft &&
            ballLeft < brickRight &&
            ballBottom > brickTop &&
            ballTop < brickBottom
        ) {
            const overlapLeft = ballRight - brickLeft;
            const overlapRight = brickRight - ballLeft;
            const overlapTop = ballBottom - brickTop;
            const overlapBottom = brickBottom - ballTop;

            const minX = Math.min(overlapLeft, overlapRight);
            const minY = Math.min(overlapTop, overlapBottom);

            if (minX < minY) {
                this.speedX = -this.speedX;

                if (overlapLeft < overlapRight) {
                    this.graphics.x = brickLeft - radius;
                } else {
                    this.graphics.x = brickRight + radius;
                }
            } else {
                this.speedY = -this.speedY;

                if (overlapTop < overlapBottom) {
                    this.graphics.y = brickTop - radius;
                } else {
                    this.graphics.y = brickBottom + radius;
                }
            }

            break;
        }
                
    }


}
}