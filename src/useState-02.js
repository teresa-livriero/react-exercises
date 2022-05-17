import React, { useState } from 'react'

export function Login({ onLogin }) {
	const [data, setData] = useState({
		username: '',
		password: '',
		remember: false,
	})

	function handleChange(event) {
		const name = event.target.name
		const value = event.target.value
		const type = event.target.type
		const checked = event.target.checked

		setData((data) => {
			return {
				...data,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
	}

    function handleClick() {
		onLogin(data)
	}

	return (
		<div>
			<input
				name="username"
				value={data.username}
				onChange={handleChange}
			/>
			<input
				name="password"
				value={data.password}
				onChange={handleChange}
			/>
			<input
				name="remember"
				type="checkbox"
				checked={data.remember}
				onChange={handleChange}
			/>
            <button
				disabled={!data.username || !data.password}
				onClick={handleClick}
			>
                Login
			</button>
		</div>
	)
}