//this function checks if the game has ended
export default function checkEnd() {
  if (this.state.guesses === 0){
    return 1
  } else if (this.state.word === this.state.word_display) {
      return 2
  } else {
      return 0
  }
}
