import React from 'react'

import './index.css'

export class Welcome extends React.Component {
	render() {
		return <p className="welcome">Hello, {this.props.name}!</p>
	}
}

/*
INDEX.CSS FILE:

.welcome {
	background-color: #f5f5dc;
	border: 1px solid #000000;
}

*/