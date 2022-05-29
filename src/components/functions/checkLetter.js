//this function checks if the letter of the button pressed is present in the word
//it proceeds to update the display, then checks if the game has ended
export default function checkLetter(event) {
  var index = this.state.word.indexOf(event.target.value)
  this.state.guessed.push(event.target.value)
  if (index !== -1){
    var temp = this.state.word.split('').map(letter => (this.state.guessed.includes(letter) ? letter : "_ "))
    this.setState({
      word_display : temp
    })

  } else {
    this.setState(function(state) {
      return{
        guesses : state.guesses - 1
      };
    });
  }
  this.checkEnd();
  event.preventDefault();
}
