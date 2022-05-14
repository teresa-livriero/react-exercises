import React, { createRef } from 'react'

export class UncontrolledLogin extends React.Component {
	_formRef = createRef()

	state = {
		disabled: false,
	}

    componentDidMount() {
		this._formRef.current.elements.username.focus()
	}

	handleSubmit = (event) => {
		event.preventDefault()

		const username = event.target.elements.username.value
		const password = event.target.elements.password.value
		const remember = event.target.elements.remember.checked

		this.props.onLogin({ username, password, remember })
	}

	handleChange = () => {
		const username = this._formRef.current.elements.username.value
		const password = this._formRef.current.elements.password.value

		this.setState({
			disabled: !!username && !!password,
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} ref={this._formRef}>
				<input 
                    name="username"
                    onChange={this.handleChange} 
                />
				<input
					name="password"
					type="password"
					onChange={this.handleChange}
				/>
				<input 
                    name="remember"
                    type="checkbox" 
                />
				<button 
                    type="submit" 
                    disabled={!this.state.disabled}
                >
					Login
				</button>
				<button 
                    type="reset"
                >
					Reset
				</button>
			</form>
		)
	}
}