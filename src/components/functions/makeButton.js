export default function makeButton(letter) {
  return (
    <button key={letter} value={letter} onClick={this.checkLetter}>
      {letter}
    </button>
  )
}
