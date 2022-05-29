//this function checks if the game has ended
export default function checkEnd(guesses,word,word_display) {
  if (guesses === 0){
    return 1
  } else if (word === word_display.join('')) {
      return 2
  } else {
      return 0
  }
}
