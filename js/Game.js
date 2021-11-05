/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(phrases){
        this.missed = 0;
        this.phrases = [
            new Phrase('Phrase One'),
            new Phrase('How be you'),
            new Phrase('I have to push the pram a lot'),
            new Phrase('Teach me how to Dougie'),
            new Phrase('Dont panic')
        ];

        this.activePhrase = null;
    }

    /**
     * initializes the game
     */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    /**
     * HTML classes and attributes to default for the new game.
     * 
     */
    resetGame() {
        document.getElementById('phrase').innerHTML = '';
        const keys = document.getElementsByClassName('key');
        for(let key of keys){
            key.className = "key";
            key.removeAttribute('disabled');
        }
        const tries = document.getElementsByClassName('tries');
        for(let attempt of tries ){
                attempt.firstElementChild.src="images/liveHeart.png";
            }
     }

    /**
     * retrieves a random phrase from the phrases array
     * 
     * @return {Object} - a Phrase
     */
    getRandomPhrase() {
        let index = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[index];
    }

    /**
     * controls game logic from DOM interaction
     * 
     * @param {Object} event object from click
     * 
     */
    handleInteraction(e) {
        const active = this.activePhrase;
        // add functionality for keyup
        const letter = e.type === 'click' ? e.target.textContent : e.key;
        const keys = document.getElementsByClassName("key");
        //finds element becayse keyup event doesn't specifically target one
        let target;
        for(let key of keys){
            if(key.textContent === letter){
            target = key;
            }
        }
        target.setAttribute('disabled', true);
        if(active.phrase.includes(letter)){
            target.classList.add('chosen');
            active.showMatchedLetter(letter);
            if(this.checkForWin()){
                this.gameOver("You Win!", true)
            }
 
        } else {
            target.classList.add('wrong');
            this.removeLife();
        }

    }
    /**
     * takes a life from the scoreboard
     */
    removeLife() {
        this.missed++
        let tries = document.getElementsByClassName('tries');
        let li;
        for(let attempt of tries){
            if(attempt.firstElementChild.src.includes("images/liveHeart.png")){
                li = attempt;
                break;
            }
        }
        li.firstElementChild.src = "images/lostHeart.png";
        if(this.missed >= 5){
            this.gameOver("Sorry, You lost!", false)
        }
    }

    /**
     * checks for win conditions
     * 
     * @returns {Boolean}
     */
    checkForWin() {
        let elements = document.getElementsByClassName('letter');
        for(let element of elements){
            if(element.className.includes("hide")){
                return false;
            }
        }
        return true;
    }

    /**
     * ends the game and display start screen
     * 
     * @params {String, Boolean} An end screen message, and a boolean marking win/loss status.
     */
    gameOver(message, status) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        overlay.className = status ? 'win' : 'lose';
        document.getElementById('game-over-message').textContent = message;
        this.resetGame();
    }
}
