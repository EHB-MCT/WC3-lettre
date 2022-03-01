"use strict";

import wordString from "./../assets/wordlist.js";


// to google => string to array js


const wordl = {
    wordToGuess: [],
    guessedWord: [],
    init() {
        this.pickRandomWord()
        document.getElementById("userInput").addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("error").innerHTML = "";
            const word = document.getElementById("inputField").value;
            
            if(word.length == 5) {
                this.guessedWord = word.split("");
                this.guessedWord = this.guessedWord.map((letter) => {
                    return {
                        char: letter,
                        rightChar: false,
                        rightPlace: false
                    }
                })
                this.match();
                document.getElementById("inputField").value = "";

            } else {
                document.getElementById("error").innerHTML = "Not a word or too long";
                console.log(word)
            }
        })
    },
    pickRandomWord() {
        const arr = JSON.parse(wordString).words;
        const word = arr[ Math.floor(Math.random() * arr.length )]
        this.wordToGuess = word.split("");
    },
    match() {
        this.guessedWord = this.guessedWord.map((item, index) => {
            if(item.char == this.wordToGuess[index]) {
                item.rightPlace = true;
            }
            if(this.wordToGuess.indexOf(item.char) !== -1) {
                item.rightChar = true;
            }
            return item;
        })
        this.addGuess();
    },
    addGuess() {
        const row = document.createElement("div");
        row.className="row"

        this.guessedWord.forEach((e) => {
            let c= "";
            if(e.rightChar) {
                c = "rightLetter"
            } 
            if(e.rightPlace) {
                c = 'rightPlace'
            }
            const html= `<div class="${c}">${e.char}</div>`
            row.insertAdjacentHTML("beforeend", html);
        })
        
        document.getElementById("tries").insertAdjacentElement("beforeend", row);
    }
}

wordl.init();