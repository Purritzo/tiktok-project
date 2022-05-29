export default function makeButton(letter) {
  return (
    <button
      class="letter"
      key={letter} 
      value={letter} 
      onClick={this.checkLetter}
      disabled={this.state.guessed.includes(letter) ? true : undefined}
    >
      {letter}
    </button>
  )
}
