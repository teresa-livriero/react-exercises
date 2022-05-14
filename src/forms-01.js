import React from 'react'

export class Welcome extends React.Component {
	render() {
		return <p>Hello, {this.props.name}!</p>
	}
}

export class InteractiveWelcome extends React.Component {
	state = {
		name: null,
	}

	handleChange = (event) => {
		this.setState({
			name: event.target.value,
		})
	}

	render() {
		return (
			<div>
				<input onChange={this.handleChange} value={this.state.name} />
				<Welcome name={this.state.name} />
			</div>
		)
	}
}