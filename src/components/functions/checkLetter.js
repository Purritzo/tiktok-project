//this function checks if the letter of the button pressed is present in the word
//it proceeds to update the display, then checks if the game has ended
export default function checkLetter(event) {
  var temp = this.state.word_display
  var index = this.state.word.indexOf(event.target.value)
  if (index !== -1){
    temp = temp.substring(0,index) + event.target.value + temp.substring(index+2)
    this.setState({
      word_display : temp
    })

  } else {
    this.setState({
      guesses : this.state.guesses - 1
    })
  }
  this.checkEnd();
  event.preventDefault();
}
