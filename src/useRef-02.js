import { useEffect, useRef } from 'react'

export function CarDetails({ initialData }) {
	const formRef = useRef(null)

	useEffect(() => {
		formRef.current.reset()
	}, [initialData])

	return (
		<form ref={formRef}>
			<input name="model" defaultValue={initialData.model} />
			<input name="year" defaultValue={initialData.year} />
			<input name="color" defaultValue={initialData.color} />

			<button type="submit">Submit</button>
		</form>
	)
}