// require letter objects
var Letter = require('./letter.js')

var Word = function(wrd){
  // property to store the string wrd
  this.word = wrd;
  // a collection of letter objects
  this.letters = [];
  // property is the word found?
  this.wordFound = false;
  this.getLets = function() {
    // populate the collection above with new Letter objects
    for (var i = 0; i < this.word.length; i++) {
      new newLetter = new Letter(this.word[i]);
      this.letters.push(newLetter);
    }
  };

  //found the current word
  this.didWeFindTheWord = function() {
    //sets this.found in the word object to true or false if all letter objects have a true value in their appear property
    if(this.letters.appear == true){
      this.wordFound = true;
    };

  };

  this.checkIfLetterFound = function(guessLetter) {
    var whatToReturn = 0;
// iterate through the collection of letter Objects

  }
// if guessLetter matches Letter property, the letter object should be shown
    return whatToReturn;
  };

  this.wordRender = function() {
    var str = '';
    // render the word based on if letters are found or ot found

    return str;
  };
}


modeule.exports = word;
// export to use in main.js
