class Paddle {
  constructor() {
    this.graphics = new PIXI.Graphics();
    this.graphics.rect(0, 0, 100, 20);
    this.graphics.fill(0xffffff);
    this.graphics.x = 350;
    this.graphics.y = 580;
    this.speed = 5; // pixels per second
    this.keys = {
        left: false,
        right: false
    }
    window.addEventListener('keydown', (e) => {
        if (e.key === 'a') {
            this.keys.left = true;
        } else if (e.key === 'd') {
            this.keys.right = true;
        }
    });
    window.addEventListener('keyup', (e) => {
        if (e.key === 'a') {
            this.keys.left = false;
        } else if (e.key === 'd') {
            this.keys.right = false;
        }
    });
    update(deltaTime) {
        if (this.keys.left) {
            this.graphics.x -= this.speed * deltaTime;
        }
        if (this.keys.right) {
            this.graphics.x += this.speed * deltaTime;
        }
        this.graphics.x = Math.max(
            20, Math.min(800 - 20, this.graphics.x)
        );
    }


    }
}
