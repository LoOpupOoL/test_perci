class Game{
    constructor(){
        this.app = new PIXI.Application();
    }
    async init(){
        await this.app.init({
            width: 800,
            height: 600,
            backgroundColor: 336699
        });
        document.getElementById('game').appendChild(this.app.canvas);
    }
}