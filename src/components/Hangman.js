//This is an attempt to put everything into one class to simplify it

import React, { Component } from 'react'
import checkLetter from './functions/checkLetter';
import handleChange from './functions/handleChange';
import handleSubmit from './functions/handleSubmit';
import makeButton from './functions/makeButton';
import checkEnd from './functions/checkEnd';
import resetButton from './functions/resetButton';

/*
import './Hangman.css';
import step0 from "./images/0.jpeg";
import step1 from "./images/1.jpeg";
import step2 from "./images/2.jpeg";
import step3 from "./images/3.jpeg";
import step4 from "./images/4.jpeg";
import step5 from "./images/5.jpeg";
import step6 from "./images/6.jpeg";
*/

export default class Hangman extends Component {

  constructor(props){
    super(props)
    //properties belonging to this class
    this.state = {
      stage : 1, 
      word : '', 
      guesses : 6, 
      value : '', 
      word_display : [],
      guessed : []
    }

    //methods for this class, binding for javascript purposes
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.checkLetter = checkLetter.bind(this);
    this.makeButton = makeButton.bind(this);
    this.checkEnd = checkEnd.bind(this);
    this.resetButton = resetButton.bind(this);
  }
  
  //vital render function, outputs HTML
  render() {
    if (this.state.stage === 1){
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Word input
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>          
        </div>
      )
    }

    if (this.state.stage === 2){
      if (this.checkEnd() === 0){
        var resultMessage = ''
      } else {
        resultMessage = (this.checkEnd() === 1) ? `Player 1 wins! The word was ${this.state.word}` : 'Player 2 wins!'
      }
      const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
      return (
        <div>
          <h1>
            {this.state.word_display}
          </h1>
          <h2>
            {resultMessage === '' ? letters.map(this.makeButton) : resultMessage}
          </h2>
          <h3>
            {resultMessage === '' ? `Guesses Left: ${this.state.guesses}` : 
            <button onClick={this.resetButton}>
              Play again?
            </button>}
          </h3>
        </div>
      )
    }
  }
}
