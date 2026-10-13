class Game{
    constructor(){
        this.app = new PIXI.Application();
    }
    async init(){
        await this.app.init({
            width: 800,
            height: 600,
            backgroundColor: 0x000000
        });
        document.getElementById('game').appendChild(this.app.canvas);
    }
}
<script src="./js/main.js"></script>