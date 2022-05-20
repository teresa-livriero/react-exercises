import { useMemo } from 'react'

export function FilteredList({ items }) {
	const list = useMemo(() => {
		return items.filter((item) => item.age > 18)
	}, [items])

	return (
		<ul>
			{list.map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	)
}