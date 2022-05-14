import React from 'react'

export class ClickCounter extends React.Component {
	state = {
		count: 0,
	}

	handleIncrement = () => {
		this.setState((state) => {
			return {
				count: state.count + 1,
			}
		})
	}

	render() {
		return (
			<>
				<h1>{this.state.count}</h1>
				<button onClick={this.handleIncrement}>+</button>
			</>
		)
	}
}