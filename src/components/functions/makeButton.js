export default function MakeButton(props) {
  const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const {letter, checkLetter, guessed, guesses} = props
  return (
    <button 
      key={letter} 
      value={letter} 
      onClick={checkLetter}
      disabled={guessed.includes(letter) ? true : undefined}
    >
      {letter}
    </button>
  )
}
