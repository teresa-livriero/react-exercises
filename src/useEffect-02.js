import React, { useEffect, useState } from 'react'

export function Counter() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((counter) => counter + 1)
		}, 1000)

		return () => {
			if (interval) {
				clearInterval(interval)
			}
		}
	}, [])

	return <h1>{count}</h1>
}