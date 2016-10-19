// require prompt to use to make the game 
var inquirer = require('inquirer');
//require the objects/exports you will use
var Word = require('./word.js');
var Game = require('./game.js');

prompt.start();

game = {
  wordBank : game.newWord.wordList, // create or import a list of words
  wordsWon : 0,// count of words Found
  guessesRemaining : 10, //per word
  currentWrd : null, //the word object
  startGame : function (wrd){
    //make sure the user has 10 guesses
    //get a random word from the array
    //populate currentWrd (made from Word constructor function) object with letters
    if(this.guessesRemaining == 10){
      var randomNumber = Math.floor(Math.random() * this.wordBank.length);
      this.currentWrd = new Word[this.wordBank[randomNumber]];
      this.currentWord.getLets();
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
      name: "choseLetter",
      type: "input",
      message: "Choose a letter:",
      validate: function(value) {
        if(isLetter(value)){
          return true;
        } else{
          return false;
        }
      }
    }].then(function(answer) {
       
        
        // console log the letetr you chose

        //this checks if the letter was found and if it is then it sets that specific letter in the word to be found

        //if the user guessed incorrectly minus the number of guesses they have left
        // and console.log if they were incorrect or correct
          
        //check if you win only when you are right
        //end game
       
        
        // display the user how many guesses remaining
      
        // render the word 
        
        // display letters the user has guessed

        // if user has remaining guesses and Word isn't found
      
        // if user has no guesses left, show them the word and tell them they lost
      
        // else show the user word and rendered
        
    });
  }


};

game.startGame();
