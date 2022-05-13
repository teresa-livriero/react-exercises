import React from 'react'

export class Welcome extends React.Component {
	render() {
		return <p>Hello, {this.props.name}!</p>
	}
}

// If no name prop is passed the component renders without showing the value of the name

export class App extends React.Component {
	render() {
		return <Welcome />
	}
}

// Here's how to pass default values for the props:

Welcome.defaultProps = {
	name: 'Jimmy'
}