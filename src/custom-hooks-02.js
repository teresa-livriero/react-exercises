import { useState } from 'react'

export function useForm() {
	const [data, setData] = useState([])

	function handleChange(event) {
        const value = event.target.value;
		
        setData((data) => {
			return {
				...data,
				value
			}
		})
	}

	return [data, handleChange]
}