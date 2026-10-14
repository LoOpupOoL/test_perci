const game = new Game();
document.getElementById("startGame").addEventListener("click", async() => {
    await game.init();
    document.getElementById("menu").style.display= "none";
    document.getElementById("game").style.display= "block";

})
