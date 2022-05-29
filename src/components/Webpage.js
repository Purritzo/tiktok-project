import React, { Component } from 'react'
import LetterForm from './LetterForm';
import NameForm from './NameForm'

export default class Webpage extends Component {

  constructor(props){
    super(props);
    this.state = {stage : 1}


  }

  render() {
    if (this.state.stage === 1){
        return (
        <div>
            <NameForm />
            <LetterForm />
        </div>
        )
    }
  }
}
