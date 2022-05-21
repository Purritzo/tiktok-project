import React, {Component} from 'react';
import './Hangman.css';

import step0 from "./images/0.jpeg";
import step1 from "./images/1.jpeg";
import step2 from "./images/2.jpeg";
import step3 from "./images/3.jpeg";
import step4 from "./images/4.jpeg";
import step5 from "./images/5.jpeg";
import step6 from "./images/6.jpeg";

class Hangman extends Component{
    static defaultProps = {
        maxWrong: 6,
        images: [step0, step1, step2, step3, step4, step5, step6]
    }
    constructor(props){
        super(props);
        this.state = {
        mistake: 0,
        guessed : new Set([]),
        answer: randomworld()
        }
    }
    
handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
        guessed: st.guessed.add(letter),
        mistake: st.mistake + (st.answer.includes(letter) ?0 : 1)
    }))


}

resetButton = () => {
    this.setState({
        mistake : 0,
        guessed: new Set([]),
        answer: randomworld()


    });
}

guessedWord(){
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
}//end of guessword

generateButtons(){
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
        <button
            class='btn btn-lg btn-primary m-2'
            key = {letter}
            value = {letter}
            onClick={this.handleGuess}
            disable={this.state.guessed.has(letter)}
        >
            {letter}
        </button>
    ));
}
render() {
    const gameOver = thisstate.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if(isWinner){
        gameStat = "You won!!"
    }
    
    if(isWinner){
        gameStat = "You did not save him :( "
    }
    return (
        <div className = "Hangman container">
         <h1 className = 'text-center'>Hangman</h1>
         <div className = "float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
         <div className = "text-center">
            <img src = {this.props.imgages[this.state.mistake]} alt=""/>
         </div>
         <div className = "text-center">
             <p>Guess the word</p>
             <p>
                 {!gameOver ? this.guessWord() : this.state.answer}
             </p>
             <p>{gameStat}</p>
             <button className = 'btn btn-info ' onClick={this.resetButton} > Reset </button>
         </div>
        </div>
        ) //end of return

    }//end of render

}//end of class Hangman




export default Hangman;