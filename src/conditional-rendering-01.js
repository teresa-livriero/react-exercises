import React from 'react'

export class Age extends React.Component {
	render() {
		return <p>Your age is {this.props.age}</p>
	}
}

export class Welcome extends React.Component {
	render() {
		return (
			<>
				<p>Hello, {this.props.name}!</p>
				{this.props.age > 18 && <Age age={this.props.age} />}
			</>
		)
	}
}

export class App extends React.Component {
	render() {
		return <Welcome age="32" />
	}
}