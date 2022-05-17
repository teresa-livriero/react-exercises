// If the numbers props is not set, no value is shown

// How to set a default value:
export function Sum({ numbers = [1, 2, 3, 4, 5] }) {
	return <h1>{numbers.reduce((tot, num) => tot + num, 0)}</h1>
}