//reset button when game ends
export default function resetButton() {
    this.setState({
        stage : 1, 
        word : '', 
        guesses : 6, 
        value : '', 
        word_display : [],
        guessed : []        
    })
}
