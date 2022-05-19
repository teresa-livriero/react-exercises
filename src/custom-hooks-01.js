import { useState } from 'react'

export function useCounter() {
	const [counter, setCounter] = useState(0)

	const handleIncrement = function handleCounterIncrement() {
		setCounter((counter) => counter + 1)
	}

	const handleDecrement = function handleCounterDecrement() {
		setCounter((counter) => counter - 1)
	}

	const handleReset = function handleCounterReset() {
		setCounter(0)
	}

	return {
		counter: counter,
		onIncrement: handleIncrement,
		onDecrement: handleDecrement,
		onReset: handleReset,
	}
}