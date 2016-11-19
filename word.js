// require letter objects
var Letter = require('./letter.js')

var Word = function(wrd){
  var that = this;
  // property to store the string wrd
  this.word = wrd;
  // a collection of letter objects
  this.letters = [];
  // property is the word found?
  this.wordFound = false;
  this.getLets = function() {
    // populate the collection above with new Letter objects
    for (var i = 0; i < that.word.length; i++) {
      // change new to var- newLetter sohlud be a variable, and you assign it to be a new Letter object
      var newLetter = new Letter(this.word[i]);
      this.letters.push(newLetter);
    }
  };

  //found the current word
  this.didWeFindTheWord = function() {
    //sets this.found in the word object to true or false if all letter objects have a true value in their appear property
    if(this.letters.every(function(ltr){
      return ltr.appear === true;
    })) {
      this.wordFound = true;
      return true;
    }

  };

  this.checkIfLetterFound = function(guessLetter) {
    var whatToReturn = 0;
  // iterate through the collection of letter Objects
    this.letters.forEach(function(lttr){
      if(lttr.letter === guessedLetter){
        lttr.appear = true;
        whatToReturn++;
      }
    })
  // if guessLetter matches Letter property, the letter object should be shown
    return whatToReturn;
  };

  this.wordRender = function() {
    var str = '';
    // render the word based on if letters are found or ot found
    that.letters.forEach(function(lttr){
      var currentLetter = lttr.letterRender();
      //changed display to str since that is the string you should be adding to
      str+= currentLetter;
    });

    return str;
  };
}

// export to use in main.js

//fixed typo
module.exports = Word;

