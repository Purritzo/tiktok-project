import React, { Component } from 'react'

export default class LetterForm extends Component {

  makeButton(value){
      return (
        <button>
            {value}
        </button>
      )
  }
  render() {
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    for (let i = 1; i < letters.length; i++){

    }
    return (
      <div>
        {letters.map(this.makeButton)}
      </div>
    )
  }
}
