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
    update(deltaTime, paddle){
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
        const paddle = 100;
        

    }
}