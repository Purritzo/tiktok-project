//This is an attempt to put everything into one class to simplify it

import React, { Component } from 'react'

export default class Hangman extends Component {

  constructor(props){
    super(props)
    //properties belonging to this class
    this.state = {stage : 1, word : '', guesses : 6, value : '', word_display : ''}

    //methods for this class, binding for javascript purposes
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkLetter = this.checkLetter.bind(this);
    this.makeButton = this.makeButton.bind(this);
    this.checkEnd = this.checkEnd.bind(this);
  }
  
  //this function changes value property as the input field changes (is this needed?)
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  //this function stores the submitted word, and creates the display that will be shown to the player
  handleSubmit(event) {
    this.setState({
      word: this.state.value,
      word_display: "_ ".repeat(this.state.value.length),
      stage : 2
    })
    event.preventDefault();
  }

  //this function checks if the letter of the button pressed is present in the word
  //it proceeds to update the display, then checks if the game has ended
  checkLetter(event) {
    var temp = this.state.word_display
    var index = this.state.word.indexOf(event.target.value)
    if (index !== -1){
      temp = temp.substring(0,index) + event.target.value + temp.substring(index+2)
      this.setState({
          word_display : temp
      })
    
    } else {
        this.setState({
            guesses : this.state.guesses - 1
        })
    }
    this.checkEnd();
    event.preventDefault();
  }

  //this function checks if the game has ended
  checkEnd(){
    if (this.state.guesses === 0){
        console.log("game over")
    } else if (this.state.word === this.state.word_display) {
        console.log("you win")        
    }
  }

  //this function is to facilitate the creation of buttons using a for loop
  makeButton(letter){
    return (
      <button value={letter} onClick={this.checkLetter}>
          {letter}
      </button>
    )
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
