class Paddle {
    constructor() {
        this.graphics = new PIXI.Graphics();
        this.width = 100;
        this.height = 20;
        this.speed = 5;
        this.graphics.rect(0, 0, this.width, this.height);
        this.graphics.fill(0xffffff);
        this.graphics.x = 350;
        this.graphics.y = 560;
        this.keys = {
            left: false,
            right: false
        };

        window.addEventListener("keydown", (event) => {
            if (event.key === "a") {
                this.keys.left = true;
            }

            if (event.key === "d") {
                this.keys.right = true;
            }
        });
         window.addEventListener("keydown", (event) => {
            if (event.key === "A") {
                this.keys.left = true;
            }

            if (event.key === "D") {
                this.keys.right = true;
            }
        });
         window.addEventListener("keydown", (event) => {
            if (event.key === "ф") {
                this.keys.left = true;
            }

            if (event.key === "в") {
                this.keys.right = true;
            }
        });
         window.addEventListener("keydown", (event) => {
            if (event.key === "Ф") {
                this.keys.left = true;
            }

            if (event.key === "В") {
                this.keys.right = true;
            }
        });

        window.addEventListener("keyup", (event) => {
            if (event.key === "a") {
                this.keys.left = false;
            }

            if (event.key === "d") {
                this.keys.right = false;
            }
        });
         window.addEventListener("keyup", (event) => {
            if (event.key === "A") {
                this.keys.left = false;
            }

            if (event.key === "D") {
                this.keys.right = false;
            }
        });
         window.addEventListener("keyup", (event) => {
            if (event.key === "ф") {
                this.keys.left = false;
            }

            if (event.key === "в") {
                this.keys.right = false;
            }
        });
         window.addEventListener("keyup", (event) => {
            if (event.key === "Ф") {
                this.keys.left = false;
            }

            if (event.key === "В") {
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


        this.graphics.x = Math.max(
            10, Math.min(this.graphics.x, 790 - this.width)
        );
    }
}