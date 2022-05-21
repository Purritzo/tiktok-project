//This is an attempt to put everything into one class to simplify it

import React, { Component } from 'react'
import checkLetter from './functions/checkLetter';
import handleChange from './functions/handleChange';
import handleSubmit from './functions/handleSubmit';
import makeButton from './functions/makeButton';
import checkEnd from './functions/checkEnd';

export default class Hangman extends Component {

  constructor(props){
    super(props)
    //properties belonging to this class
    this.state = {stage : 1, word : '', guesses : 6, value : '', word_display : ''}

    //methods for this class, binding for javascript purposes
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.checkLetter = checkLetter.bind(this);
    this.makeButton = makeButton.bind(this);
    this.checkEnd = checkEnd.bind(this);
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
        const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        return (
            <div>
              <h1>
                {this.state.word_display}
              </h1>
              <h2>
                {letters.map(this.makeButton)}
              </h2>
              <h3>
                  {this.state.guesses}
              </h3>
            </div>
        )
    }
  }
}
