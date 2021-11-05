/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * listens for click on start button to initialize a new Game class
 */
document.getElementById('btn__reset').addEventListener('click', () => {

    const game = new Game();
    game.startGame();
    const keyrows = document.getElementById('qwerty').children;
    //iterate through array of keyrows
    for(let keyrow of keyrows){
        //iterate through key elements in each keyrow
        for(let key of keyrow.children){
        key.addEventListener('click', (e) =>{
            handleInteraction(e);

})}}});//awesome end line