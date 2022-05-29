//this function stores the submitted word, and creates the display that will be shown to the player
export default function handleSubmit(event) {
  this.setState({
    word: this.state.value,
    word_display: Array(this.state.value.length).fill('_ '),
    stage : 2
  })
  event.preventDefault();
}
