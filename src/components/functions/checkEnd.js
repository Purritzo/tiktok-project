//this function checks if the game has ended
export default function checkEnd() {
  if (this.state.guesses === 0){
    console.log("game over")
  } else if (this.state.word === this.state.word_display) {
    console.log("you win")        
  }
}
