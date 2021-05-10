var programming_languages = ["java", "csharp", "html", "javascript", "php", "python", "nosql", "mysql"];

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randWord() {
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuwxyz'.split('').map(letter =>
        `
            <button 
            class = "btn btn-lg btn-primary m-2"
            id = '`+ letter + `'
            onClick = "handleGuess('`+ letter + `')"
            >
                ` + letter + `
            </button>
        `).join(''); //gets rid of all of the commas. 

    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null; //lambda
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0) { //if it is true
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updateHangmanPicture();
    }
}

function updateHangmanPicture() {
    document.getElementsById('hangman_pic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = "The answer was: " + answer;
        document.getElementById('keyboard').innerHTML = 'You lost >:|';
    }
}

function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You have won this game of hangman!!';
    }
}

function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangman_pic').src = './images/0.jpg';

    randWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randWord();
generateButtons();
guessedWord();
handleGuess();