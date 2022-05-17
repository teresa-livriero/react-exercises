import { useState } from "react"

export function ClickCounter() {
	const [count, setCount] = useState(0)

	const handleIncrement = () => {
		setCount((count) => count + 1)
	}

	return (
		<>
			<h1>{count}</h1>
			<button onClick={handleIncrement}>+</button>
		</>
	)
}