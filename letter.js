// Constructor that creates letter object
var Letter = function(letter) {
  // property to store the actual letter
  this.letter = letter;
  // property/boolean if the letter can be shown
  this.appear = false;

  this.letterRender = function() {
    //if appear is false then show the _
    //changed appear to this.appear
    if(this.appear == false){
      return '_';
    } //else appear is true then show character
    else {
      return this.letter;
    }
  };
};

// export to use in word.js
module.exports = Letter;
