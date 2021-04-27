const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
 }

 function morseCodeString(string){
    this.string = string;

    this.toMorse = function(){
        let morse = "";
        for (let index = 0; index < string.toUpperCase().length; index++) {
            morse = morse + morseCode[string.toUpperCase().charAt(index)];
        }
        return morse;
    }
 }
 var c = new morseCodeString("Hola me llamo pepe");
 console.log(c.toMorse());