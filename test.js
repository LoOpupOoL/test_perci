const gameMusic = new Audio("./music/music.mp3");
gameMusic.loop = true;
gameMusic.volume = 0.3;
let game = null;
document.getElementById("startGame").addEventListener("click", async () => {
    const startButton = document.getElementById("startGame");
    startButton.disabled = true;

    if (game) {
        game.app.destroy(true);
        game = null;
    }

    game = new Game();
    await game.init();
    gameMusic.currentTime = 0;
    gameMusic.play().catch(error => {
        console.error("Ошибка воспроизведения музыки:", error);
    });

    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

    startButton.disabled = false;
});