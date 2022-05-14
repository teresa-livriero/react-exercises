import React from 'react'

export class Login extends React.Component {
	state = {
		username: '',
		password: '',
		remember: false,
	}

	handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		const type = event.target.type
		const checked = event.target.checked

		this.setState({
			[name]: type === 'checkbox' ? checked : value,
		})
	}

    handleClick = () => {
		this.props.onLogin(this.state)
	}

	render() {
		return (
			<div>
				<input
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<input
					name="remember"
					type="checkbox"
					checked={this.state.remember}
					onChange={this.handleChange}
				/>
                <button
					disabled={!this.state.username || !this.state.password}
					onClick={this.handleClick}
				>
                    Login
				</button>
			</div>
		)
	}
}