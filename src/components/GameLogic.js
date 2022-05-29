import React, { Component } from 'react'
//import ReactDOM from 'react-dom/client'

export default class GameLogic extends Component {
  constructor(props) {
    super(props);
    this.state = {finished: false, length: 0, tries_left: 6};

  }



  componentDidUpdate(prevProps) {
    if (this.props !== prevProps){
        this.setState({
            length: this.props.word.length
        })
    }
  }

  render() {
    var word_display = "_ ".repeat(this.state.length)
    return (
      <div>
        <h1>
            {this.state.length}
        </h1>
        <h2>
            { word_display }
        </h2>
      </div>
    )
  }
}

