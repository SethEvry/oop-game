/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();

    }
    /**
     * Adds letter placeholders to the display
     * 
     */
    addPhraseToDisplay(){
        let letters = this.phrase.split('');
        let html = '<div class="word">';
        letters.forEach(letter => {
            if(letter === ' '){
                html += `</div><li class="space"> </li><div class="word">`
            } else {
                html += `<li class="hide letter ${letter}">${letter}</li>`
            }
            
        })
        html += '</div>'
        document.getElementById('phrase').innerHTML = html;
    }

    /**
     * Checks to see if the letter selected matches
     */
    checkLetter(letter){
        return this.phrase.includes(letter);
    }

    /**
     * reveals letter(s) on the board that match the selection
     */
    showMatchedLetter(letter){
        let letters = document.getElementsByClassName(`letter ${letter}`);
        for(let rightLetter of letters){  
            rightLetter.classList.remove('hide');
            rightLetter.classList.add('show');
        }
    }


}