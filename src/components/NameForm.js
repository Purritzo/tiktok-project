import React, { Component } from 'react'
import GameLogic from './GameLogic';
//import ReactDOM from 'react-dom'

export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {word: '', value: ''};

    //methods for this class
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('Word submitted: ' + this.state.value);
    this.setState({
      word: this.state.value
    })
    event.preventDefault();
    //console.log(this.state.value);
  }


  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Word input
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h1>
          Current word: {this.state.word}
        </h1>
        <h2>
          Length: <GameLogic word={this.state.word} />
        </h2>
      </div>
      </>
    );
  }

}

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NameForm />
);
*/

