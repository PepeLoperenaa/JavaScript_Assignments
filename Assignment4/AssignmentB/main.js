var programming_languages = ["java", "csharp", "html", "javascript", "php", "python", "nosql", "mysql", "mongodb", "ruby"];

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randWord() { //randomising array. 
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

function generateButtons() { //Creating the alphabet with buttons
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => //using map, we split and create buttons for different values. 
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

function guessedWord() { //function to guess the words. 
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join(''); //use of ternary operator. An if statement could be used. 

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() { //updating the counter of mistakes
    document.getElementById('mistakes').innerHTML = mistakes
}

function handleGuess(chosenLetter) { //get the chosen letter and see if it is correct. 
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null; //ternary operator again.
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0) { //if it is true
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) { //strict equals false
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updateHangmanPicture();
    }
}

function updateHangmanPicture() { //when there is a mistake, update the image. 
    document.getElementById('hangman_pic').src = './images/' + mistakes + '.jpg'; //img and mistakes go up to 6. 
}

function checkIfGameLost() { //checking if the game has lost
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = "The answer was: " + answer;
        document.getElementById('keyboard').innerHTML = 'You lost >:|';
    }
}

function checkIfGameWon() { //checking if the game has won.
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You have won this game of hangman!!';
    }
}

function reset() { //reseting thr game
    mistakes = 0;
    guessed = [];
    document.getElementById('hangman_pic').src = './images/0.jpg';

    randWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong; //number of wrong answers

randWord();
generateButtons();
guessedWord();