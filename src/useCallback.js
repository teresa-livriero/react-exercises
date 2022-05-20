import { useState, useCallback } from 'react'

export function useCounter() {
	const [counter, setCounter] = useState(0)

	const handleIncrement = useCallback(function handleIncrement() {
		setCounter((counter) => counter + 1)
	}, [])

	const handleDecrement = useCallback(function handleDecrement() {
		setCounter((counter) => counter - 1)
	}, [])

	const handleReset = useCallback(function handleReset() {
		setCounter(0)
	}, [])

	return {
		counter: counter,
		onIncrement: handleIncrement,
		onDecrement: handleDecrement,
		onReset: handleReset,
	}
}