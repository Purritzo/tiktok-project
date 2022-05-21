export default function makeButton(letter) {
  return (
    <button 
      key={letter} 
      value={letter} 
      onClick={this.checkLetter}
      disabled={this.state.guessed.includes(letter) ? true : undefined}
    >
      {letter}
    </button>
  )
}
