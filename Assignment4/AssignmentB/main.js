var programming_languages = ["java", "csharp", "html", "javascript", "php", "python", "nosql", "mysql"];

let answer = '';
let maxWrong = 6;
let mistakes = 0; 
let guessed = [];

function randWord(){
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

function generateButtons(){
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => 
        `
            <button 
            class = "btn btn-lg btn-primary m-2"
            id = '`+ letter + `'
            onClick = "handleGuess('`+ letter + `')"
            >
                ` + letter + `
            </button>
        `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

randWord();
generateButtons();