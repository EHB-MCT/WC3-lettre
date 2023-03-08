"use strict";

import wordString from "./../assets/wordlist.js";

// to google
// chop string to 5 characters      (splice)
// string to array js               (split)


const wordl = {
    // Example: ['a', 'g', 'e', 'n', 't']
    wordToGuess: [],
    // Tip: use an object to capture all info of a guess
    // Example: [{
    //     char: letter,
    //     rightChar: false,
    //     rightPlace: false
    // }]
    guessedWord: [],
    init() {
        this.reset();
    },
    pickRandomWord() {
    },
    matchWord() {
    },
    addGuess() {
    },
    showSolution() {
    },
    reset() {
    }
}

wordl.init();