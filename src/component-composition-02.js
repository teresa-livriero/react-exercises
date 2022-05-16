import React from 'react'

export class Container extends React.Component {

render() {
	const styles = {
		backgroundColor: '#ffffff',
		border: '1px solid #ff0000'
	};

	return <div style={styles}>
			<h1>{this.props.title}</h1>
			{this.props.children}
		 </div>
}

}