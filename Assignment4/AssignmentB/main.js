var programming_languages = ["java", "csharp", "html", "javascript", "php", "python", "nosql", "mysql"];

let answer = '';
let maxWrong = 6;
let mistakes = 0; 
let guessed = [];

function randWord(){
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];

    alert(answer);
}

randWord();