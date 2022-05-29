//this function checks if the letter of the button pressed is present in the word
//it proceeds to update the display, then checks if the game has ended
import { updatedisplay, add_guess, wrongguess } from "../../features/hangman/hangmanSlice"
import { useDispatch } from "react-redux"

export default function CheckLetter(event,word,guessed) {
  const dispatch = useDispatch()
  const letter = event.target.value
  dispatch(add_guess(letter))
  let index = word.indexOf(event.target.value)
  if (index !== -1){
    dispatch(updatedisplay(word.split('').map(letter => (guessed.includes(letter) ? letter : "_ "))))

  } else {
    dispatch(wrongguess())
    }
  event.preventDefault();
  }