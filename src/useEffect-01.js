import { useState } from "react"

export function ClickCounter({ onCounterChange }) {
	const [count, setCount] = useState(0)

    useEffect(() => {
		onCounterChange(count)
	}, [count, onCounterChange])

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