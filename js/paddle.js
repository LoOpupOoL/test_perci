class Paddle {
    constructor() {
        this.graphics = new PIXI.Graphics();

        // Размеры платформы
        this.width = 100;
        this.height = 20;

        // Скорость движения
        this.speed = 6;

        // Рисуем платформу
        this.graphics.rect(0, 0, this.width, this.height);
        this.graphics.fill(0xffffff);
        this.graphics.x = 350;
        this.graphics.y = 560;
        this.keys = {
            left: false,
            right: false
        };
и
        window.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                this.keys.left = true;
            }

            if (event.key === "ArrowRight") {
                this.keys.right = true;
            }
        });

        window.addEventListener("keyup", (event) => {
            if (event.key === "ArrowLeft") {
                this.keys.left = false;
            }

            if (event.key === "ArrowRight") {
                this.keys.right = false;
            }
        });
    }

    update(deltaTime) {
        if (this.keys.left) {
            this.graphics.x -= this.speed * deltaTime;
        }

        if (this.keys.right) {
            this.graphics.x += this.speed * deltaTime;
        }

        // Ограничение движения стенками
        this.graphics.x = Math.max(
            20,
            Math.min(this.graphics.x, 800 - 20 - this.width)
        );
    }
}