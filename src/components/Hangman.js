//This is an attempt to put everything into one class to simplify it

import React from 'react';
import HangmanTitle from './images/HangmanTitle.png';
import checkEnd from './functions/checkEnd';
import { useDispatch, useSelector } from 'react-redux';
import { save_word, add_guess, wrongguess, updatedisplay, reset } from '../features/hangman/hangmanSlice'

import './Hangman.css';

export default function Hangman() {
  
  const stage = useSelector(state => state.stage)
  const word = useSelector(state => state.word)
  const guesses = useSelector(state => state.guesses)
  const word_display = useSelector(state => state.word_display)
  const guessed = useSelector(state => state.guessed)
  const invalid_word = useSelector(state => state.invalid_word)
  const dispatch = useDispatch()
  const CheckLetter = (x) => {
    dispatch(add_guess(x.target.value))
    var index = word.indexOf(x.target.value)
    if (index !== -1){
      dispatch(updatedisplay(word.split('').map(letter => (guessed.includes(letter) ? letter : "_ "))))
  
    } else {
      dispatch(wrongguess())
      }
  }
  
  if (stage === 1){
    return (
      <div className = "box">
      <form onSubmit={(e) => {
        dispatch(save_word(e.target.word.value))
        e.preventDefault();
      }
      }>
        <img src={HangmanTitle} alt=""/>
        <label>
          <input type="text" name="word" placeholder='Enter your word here'/>
        </label>
        <div>
        <button class="submitButton">Submit your word</button>
        </div>
        {invalid_word === true &&
          <div>
            Invalid word! Try again.
          </div>
        }
      </form>
    </div>
    )
  }
  else if (stage === 2){
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var buttons = []
    for (const letter of letters)  {
      buttons.push(
      <button key={letter} onClick={(e) => CheckLetter(e)} disabled={guessed.includes(letter)} value={letter}>
      {letter}
      </button>
      )
    }
    } 
    var end_status = checkEnd(guesses,word,word_display)
    if (end_status === 0){
    return (
      <div className="box">
        <h2>
          {word_display}
        </h2>
        {buttons}
        <div>
        Guesses Left: &nbsp; {guesses}
        </div>
      </div>
    )
    } else if (end_status === 1){
      return (
        <>        
        <div className="box">
          Player 1 wins!
        <div>
        <button onClick={() => dispatch(reset())}>
            Play again?
        </button>
        </div>
        </div>
        </>
      )
    } else if (end_status === 2){
      return(
      <>
      <div className="box">
        Player 2 wins!
      <div>
        <button onClick={() => dispatch(reset())}>
          Play again?
        </button>
      </div>
      </div>
      </>
      )
    }

  }

