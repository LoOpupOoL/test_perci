class Paddle {
  constructor() {
    this.graphics = new PIXI.Graphics();
    this.graphics.rect(0, 0, 100, 20);
    this.graphics.fill(0xffffff);
    this.graphics.x = 350;
    this.graphics.y = 580;
  }
}
