/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(phrases){
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    /**
     * initializes the game
     */
    startGame() {}

    /**
     * retrieves a random phrase from the phrases array
     * 
     * @return {Object} - a Phrase
     */
    getRandomPhrase() {}

    /**
     * controls game logic from DOM intercation
     */
    handleInteraction() {}
    /**
     * takes a life from the scoreboard
     */
    removeLife() {}

    /**
     * checks for win conditions
     */
    checkForWin() {}

    /**
     * ends the game and display start screen
     */
    gameOver() {}
    
}