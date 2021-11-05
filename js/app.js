/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const keyboard = document.getElementById('qwerty');
/**
 * listens for click on start button to initialize a new Game class
 */
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
    });

/**
 * Checks for a click on one of the keys on the screen 
 * and calls the event handler
 * 
 */    
keyboard.addEventListener('click', e => {
    if(e.target.className === "key"){
        game.handleInteraction(e);
    }
})