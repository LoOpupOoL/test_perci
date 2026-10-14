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

    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";

    startButton.disabled = false;
});