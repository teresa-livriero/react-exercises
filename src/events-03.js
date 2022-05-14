import React from 'react'

export class ClickTracker extends React.Component {
	state = {
		clickedButton: null,
	}

	handleClick = (event) => {
		this.setState({
			clickedButton: event.target.name,
		})
	}

	render() {
		return (
			<div>
				<button name="Button 1" onClick={this.handleClick}>Button 1</button>
				<button name="Button 2" onClick={this.handleClick}>Button 2</button>
				<button name="Button 3" onClick={this.handleClick}>Button 3</button>

				<h1>{this.state.clickedButton}</h1>
			</div>
		)
	}
}