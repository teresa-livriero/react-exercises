import React from 'react'

export class Container extends React.Component {

render() {
	const styles = {
		backgroundColor: '#ffffff',
		border: '1px solid #ff0000'
	};

	return <div style={styles}>{this.props.children}</div>
}

}