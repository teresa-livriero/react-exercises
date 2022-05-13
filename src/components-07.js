import React from 'react'

export class Message extends React.Component {
	render() {
		return <p>What a beautiful day!</p>
	}
}

export class Hello extends React.Component {
	render() {
		return (
			<>
				<h1>Hello, World!</h1>
				<Message />
			</>
		)
	}
}