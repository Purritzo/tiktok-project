//this function changes value property as the input field changes (is this needed?)
export default function handleChange(event) {
	this.setState({value: event.target.value});
}
