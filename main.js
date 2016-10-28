// require prompt to use to make the game 
var inquirer = require('inquirer');
//require the objects/exports you will use
var Word = require('./word.js');
var Game = require('./game.js');

prompt.start();

var game = {
  wordBank : Game.newWord.wordList, // create or import a list of words
  wordsWon : 0,// count of words Found
  guessesRemaining : 10, //per word
  currentWrd : null, //the word object
  guessedLetters : [],
  startGame : function (wrd){
    //make sure the user has 10 guesses
    //get a random word from the array
    //populate currentWrd (made from Word constructor function) object with letters
    if(this.guessesRemaining == 10){
      var randomNumber = Math.floor(Math.random() * this.wordBank.length);
      this.currentWrd = new Word[this.wordBank[randomNumber]];
      this.currentWrd.getLets();
      //displays current word as blanks.
      console.log(this.currentWord.wordRender());
      this.keepPromptingUser();
    } else{
      this.resetGuessesRemaining();
      this.startGame();
    }

  },
  resetGuessesRemaining : function(){
    // reset guess count for new game
    guessesRemaining = 10; 
  },
  keepPromptingUser : function(){
    var self = this;

    inquirer.prompt([{
      name: "chosenLetter",
      type: "input",
      message: "Choose a letter:",
      validate: function(value) {
        if(isLetter(value)){
          return true;
        } else{
          return false;
        }
      }
    }]).then(function(answer) {

        // console log the letetr you chose
        console.log(answer.chosenLetter);
        //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
        that.guessedLetters.push(answer.chosenLetter);

        var found = self.currentWrd.checkIfLetterFound(answer.chosenLetter);
        //if the user guessed incorrectly minus the number of guesses they have left
        // and console.log if they were incorrect or correct
          if(found === 0){
            console.log('Your guess is wrong.');
            self.guessesRemaining--;
            console.log('Guesses remaining: ' + self.guessesRemaining);

            console.log("Letters guessed: " + that.guessedLetters);
          } else{
            console.log('Your guess is right!');
              //checks to see if user won
              if(that.currentWord.didWeFindTheWord() == true){
                console.log(that.currentWord.wordRender());
                console.log('You won the game!!!');
              } else{
                // display the user how many guesses remaining
                console.log('Guesses remaining: ' + that.guessesRemaining);
                console.log("Letters guessed: " + that.guessedLetters);
              }
          }
          if(that.guessesRemaining > 0 && that.currentWord.wordFound === false) {
            that.keepPromptingUser();
          }else if(that.guessesRemaining === 0){
            console.log('Game over!');
            console.log('The word you were guessing was: ' + that.currentWord.word);
          }
    });
  }


// game.startGame();
